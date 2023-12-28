const { User, Task } = require("../model/model")

const taskController = {
    // Add new task
    addTask: async (req, res) => {
        try {
            //Get new task form body
            const newTask = new Task(req.body)

            // Check owner of task
            if (req.body.user) {
                // Find the owner of task. then update task's for the
                // user's array tasks. then save the new task
                const user = User.findById(req.body.user)
                await user.updateOne({ $push: { user: newTask._id } })
                await newTask.save()
            }
            res.status(200).json(newTask)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get all tasks
    getAllTask: async (req, res) => {
        try {
            const tasks = await Task.find()
            res.status(200).json(tasks)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get one task
    getOneTask: async (req, res) => {
        try {
            const tasks = await Task.findById(req.params.id).populate("user")
            res.status(200).json(tasks)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // update task
    updateTask: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id)
            await task.updateOne({ $set: req.body })
            res.status(200).json({ Success: true })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // delete task
    deleteTask: async (req, res) => {
        try {
            // get and delete task's id from user's array task
            await User.updateMany(
                { tasks: req.params.id },
                { $pull: { tasks: req.params.id } }
            )
            // delete task
            await Task.findByIdAndDelete(req.params.id)
            res.status(200).json({ 
                Success: true, 
                Message: "Xoa cmnr" 
            })
        } catch (error) {
        
            res.status(500).json(error)
        }
    }
}

module.exports = taskController
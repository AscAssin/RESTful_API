const { User, Task } = require("../model/model")

const taskController = {
    // Add new task
    addTask: async (req, res) => {
        try {
            const newTask = new Task(req.body)
            const save = await newTask.save()
            if (req.body.User) {
                // const user = User.findById(req.body._id)
                // await user.updateOne({$push:{tasks: save._id}})
                const user = await User.findByIdAndUpdate(save.owner,{tasks: save._id})
                await user.save()
            }
            res.status(200).json(save)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get all tasks
    getAllTask: async (req, res) => {
        try {
            const tasks = await Task.find({})
            res.status(200).json(tasks)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = taskController
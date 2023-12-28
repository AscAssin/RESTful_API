const { User, Task } = require("../model/model")

const userController = {
    // Add new user
    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body)
            const save = await newUser.save()
            res.status(200).json(save)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get all users
    getAllUser: async (req, res) => {
        try {
            const users = await User.find({})
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // get one user
    getOneUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // Get all task of user
    getAllTaskOfUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate("tasks")
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // update user
    updateUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            await user.updateOne({ $set: req.body })
            res.status(200).json({ Success: true })
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = userController
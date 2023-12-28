const taskController = require('../controllers/taskController')
const express = require('express')
const router = express()

// Add new task
router.post("/",taskController.addTask)

// get all user
router.get("/",taskController.getAllTask)

module.exports = router
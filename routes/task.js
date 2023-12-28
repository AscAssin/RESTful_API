const taskController = require('../controllers/taskController')
const express = require('express')
const router = express()

// Add new task
router.post("/",taskController.addTask)

// get all task
router.get("/",taskController.getAllTask)

// get one task
router.get("/:id",taskController.getOneTask)

// update task
router.put("/:id", taskController.updateTask)

// delete task
router.delete("/:id", taskController.deleteTask)


module.exports = router
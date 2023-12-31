const userController = require('../controllers/userController')
const express = require('express')
const router = express()

// Add new user
router.post("/",userController.addUser)

// get all users
router.get("/",userController.getAllUser)

// get one user
router.get("/:id", userController.getOneUser)

module.exports = router
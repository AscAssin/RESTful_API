const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const userRoute = require("./routes/user")
const taskRoute = require("./routes/task")

// connect database
dotenv.config()
mongoose.connect(process.env.MONGODB_URL,{
    dbName:"myDB"
})
    .then(
        () => console.log("Connected!")
    )
    .catch(
        () => console.log("Failed!")
    )

app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors())
app.use(morgan('common'))

// routes
app.use('/user', userRoute)
app.use('/task', taskRoute)

// Start server
const port = app.get('port') || 8000
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`))
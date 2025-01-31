require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./Routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')
 
//express app initialization
const app = express()
app.use(cors())

//middleware function that parses JSON data in the request body 
// and logs the path and HTTP method of the request to the console 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db using .env file
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port 4000!!!')
         })
    })
    .catch((error) => {
        console.log(error)
    })


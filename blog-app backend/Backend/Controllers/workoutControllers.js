const Workout = require('../Models/workoutModel')
const mongoose = require('mongoose')

// get all workouts/blog
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get a single workout/blog
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such workout'})
    }
    
    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: 'no such workout'})
    }

    res.status(200).json(workout)
}

// create new workout/blog
const createWorkout = async (req, res) => {
    const {title,author,blog} = req.body

    //add doc to DB
    try{ 
        const workout = await Workout.create({title, author, blog})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete a workout/blog
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(400).json({error: 'no such workout'})
    }

    res.status(200).json(workout)
}



// update a workout/blog
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!workout){
        return res.status(400).json({error: 'no such workout'})
    }

    res.status(200).json(workout)
}

// export functions
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

}
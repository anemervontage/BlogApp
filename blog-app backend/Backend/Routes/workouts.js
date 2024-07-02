const express = require('express')
const router = express.Router()
const {
    createWorkout, 
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../Controllers/workoutControllers')

//GET a all workout/blog
router.get('/', getWorkouts)

//GET a single workout/blog (unused)
router.get('/:id', getWorkout)

//POST a new workout/blog
router.post('/', createWorkout)

//DELETE a single workout/blog (unused)
router.delete('/:id', deleteWorkout)

//UPDATE a single workout/blog (unused)
router.patch('/:id', updateWorkout)

module.exports = router
const asyncHandler = require('express-async-handler')
const Goal = require('../model/goal_model')
// @desc  Get goals
// @route GET api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals)
    }
)

// @desc Set Goal
// @rout POST api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        // res.status(400).json({message: 'please enter message field'})
        throw new Error('please enter message field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(
        goal
    )
})

// @desc Update Goal
// @rout PUT api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('User Not Found')
    }
    const updatedGoal = await  Goal.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedGoal)
    }
)

// @desc Delete Goal
// @rout DELETE api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('User Not Found')
    }
    await goal.deleteOne()
    res.status(200).json({id:req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
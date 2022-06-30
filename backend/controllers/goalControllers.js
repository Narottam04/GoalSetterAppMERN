const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message:'get goals'})
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message:'set goals'})
})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message:`update goals ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}
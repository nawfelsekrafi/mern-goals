const asyncHandler = require("express-async-handler");

// @desc Get Goals
// @route GET /api/goals
// @access Private
exports.getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});
// @desc Set Goal
// @route Post /api/goal/:id
// @access Private
exports.setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
});
// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
exports.updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});
// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
exports.deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

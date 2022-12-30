const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// @desc Get Goals
// @route GET /api/goals
// @access Private
exports.getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ deletedAt: null });
  res.status(200).json({ message: "success", size: goals.length, data: goals });
});
// @desc Set Goal
// @route Post /api/goal/:id
// @access Private
exports.setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create(req.body);

  res.status(201).json({
    message: "success",
    data: goal,
  });
});
// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
exports.updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findOneAndUpdate(
    { id: req.params.id, deletedAt: null },
    req.body,
    {
      new: true,
    }
  );
  if (!goal) {
    res.send(404);
    throw new Error("Goal not found");
  }

  res.status(200).json({ message: "success", data: goal });
});
// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
exports.deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findOneAndUpdate(
    { id: req.params.id, deletedAt: null },
    {
      deletedAt: Date.now(),
    }
  );
  if (!goal) {
    res.send(404);
    throw new Error("Goal not found");
  }
  res.status(204).json({ message: "deleted successfully"});
});

// @desc Get Deleted Goals
// @route GET /api/goals/getDeletedGoals
// @access Private
exports.getDeletedGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ deletedAt: { $ne: null } });
  res.status(200).json({ message: "success", size: goals.length, data: goals });
});
// @desc Get All Goals
// @route GET /api/goals/all
// @access Private
exports.getAllGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ message: "success", size: goals.length, data: goals });
});

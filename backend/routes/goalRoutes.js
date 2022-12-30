const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  getDeletedGoals,
  getAllGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);
router.route("/deletedGoals").get(getDeletedGoals);
router.route("/all").get(getAllGoals);
module.exports = router;

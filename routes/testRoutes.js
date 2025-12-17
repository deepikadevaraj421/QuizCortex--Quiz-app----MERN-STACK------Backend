const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { isTeacher, isStudent } = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/student", protect, isStudent, (req, res) => {
  res.json({ message: "Welcome Student Dashboard" });
});

router.get("/teacher", protect, isTeacher, (req, res) => {
  res.json({ message: "Welcome Teacher Dashboard" });
});
router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running successfully 🚀",
  });
});

module.exports = router;

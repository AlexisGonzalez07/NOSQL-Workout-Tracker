const router = require('express').Router();
//const {Workout} = require('../models/index')
const path = require("path");


router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/index.html"));
});
// GET Route for exercise page
router.get('/exercise', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
);
// GET Route for stats page
router.get('/stats', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/stats.html'))
);



module.exports = router;

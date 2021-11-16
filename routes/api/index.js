const router = require("express").Router();
// const mongojs = require("mongojs");
// const databaseUrl = "workout";
// const collections = ["workout"];
const Workout = require("../../models/workout.js");
// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

// app.post("/workouts", (req, res) => {
//   console.log(req.body);

//   Workout.insert(req.body, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// });
router.get("/workouts", (req, res) => {
  Workout.aggregate(
    [{
    $addFields: {
    totalDuration: {$sum:"$exercises.duration"}
    }
    }])
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate(
    [{
    $addFields: {
    totalDuration: {$sum:"$exercises.duration"}
    }
    }])
    .sort({ date: -1 })
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// router.get("/workouts", (req, res) => {
//   Workout.find({})
//     .then((data) => {
//       // data.aggregate()
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.put("/workouts/:id", (req, res) => {
  let newExercise = req.body
  console.log(newExercise)
  Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $push: { exercises: newExercise}
    }
  )
    .then((data) => {
      console.log("SUCCESS!!!!!!!!!!!!!!!" + data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts", (req, res) => {
  console.log(req.body);
  Workout.create({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

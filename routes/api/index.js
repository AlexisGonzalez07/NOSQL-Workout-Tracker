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
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

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

// app.get("/find/:id", (req, res) => {
// Workout.findOne(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
//   (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
// });

// app.post("/update/:id", (req, res) => {
//   Workout.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         title: req.body.title,
//         note: req.body.note,
//         modified: Date.now()
//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
// Workout.remove(
//     {
//       _id: mongojs.ObjectID(req.params.id)
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

// app.delete("/clearall", (req, res) => {
//   Workout.remove({}, (error, response) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(response);
//     }
//   });
// });

module.exports = router;

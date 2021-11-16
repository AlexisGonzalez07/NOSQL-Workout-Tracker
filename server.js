const express = require("express");
// const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");
const { clog } = require('./middleware/clog');
const routes = require('./routes');
require('dotenv').config();
const mongoose = require('mongoose');
// const db = require('./models');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


const PORT = process.env.PORT || 3001;
const app = express();


app.use(logger("dev"));
// Import custom middleware, "cLog"
app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const path = require("path");
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "../public/index.html"));
//   });
//   // GET Route for exercise page
//   router.get('/exercise', (req, res) =>
//     res.sendFile(path.join(__dirname, '../public/exercise.html'))
//   );
//   // GET Route for stats page
//   router.get('/stats', (req, res) =>
//     res.sendFile(path.join(__dirname, '../public/stats.html'))
//   );

module.exports = router;
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const path = require("path");
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
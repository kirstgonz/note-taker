const router = require('express').Router();
const notesRoute = require('../apiRoutes/notesRoute.js');

router.use(notesRoute);

module.exports = router;
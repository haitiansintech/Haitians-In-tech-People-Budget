const router = require('express').Router();

const { router: Budget } = require('./Budget/budget');
router.use(`/budget`, Budget);


module.exports = router;
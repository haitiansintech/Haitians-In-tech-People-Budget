const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("budget API worked")
})

module.exports = { router };
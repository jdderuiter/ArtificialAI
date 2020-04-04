var express = require('express');
var router = express.Router();
const mongoos = require('mongoose');

const Profile = require('../models/profile');

router.get('/', async (req, res, next) => {
    try {
        const profiles = await Profile.find({}).exec();
        res.status(200).json(profiles);
    } catch(e) {
        console.log(e)
        res.status(500).json({error: err})
    }
});

module.exports = router;
const express = require('express');

// const foodsController = require('../controller/foods')

const controllers = require('../controller/foods')

const router = express.Router();

router.get('/',controllers.getfoods)
router.get('/getFoodDetails',controllers.getallfoods)

module.exports = router
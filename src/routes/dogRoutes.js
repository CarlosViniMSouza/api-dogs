const express = require('express');
const router = express.Router();

// import function of routes
const { 
    getDogs, insertDogs, 
    updateDogs, deleteDogs 
} = require('../controllers/dogController');

// implies a function for each route
router.route('/').get(getDogs).post(insertDogs);
router.route('/:id').put(updateDogs).delete(deleteDogs);

module.exports = router;
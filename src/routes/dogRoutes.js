const express = require('express');
const router = express.Router();

// import function of routes
const { 
    getDogs, insertDogs, 
    updateDogs, deleteDogs 
} = require('../controllers/dogController');

// import the auth controller
const { authToken } = require('../auth/dogAuth');

// implies a function for each route
router.route('/')
    .get(authToken, getDogs)
    .post(authToken, insertDogs);

router.route('/:id')
    .put(authToken, updateDogs)
    .delete(authToken, deleteDogs);

module.exports = router;

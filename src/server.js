const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

const { errorResult } = require('./middlewares/errorMiddleware');

app.use(express.json());

// call our route
app.use('/api/dogs', require('./routes/dogRoutes'));

// middleware for filter errors
app.use(errorResult);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Server Up!'});
});

app.listen(port, () => { console.log(`Listening on ${port}`) });

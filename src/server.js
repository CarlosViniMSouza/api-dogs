const express = require('express');
const dotenv = require('dotenv').config();

const connectDB = require('./config/dbPostgres');
const MongoClient = require('./config/dbMongo');

const app = express();
const port = process.env.PORT || 3333;

const { errorResult } = require('./middlewares/errorMiddleware');

MongoClient();

app.use(express.json());

// middleware for filter errors
app.use(errorResult);

// call our route
app.use('/api/dogs', require('./routes/dogRoutes'));

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Server Up!'});
});

app.listen(port, () => { console.log(`Listening on ${port}`) });

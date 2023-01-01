const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

// call our route
app.use('/api/dogs', require('./routes/dogRoutes'));

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Server Up!'});
});

app.listen(port, () => { console.log(`Listening on ${port}`) });

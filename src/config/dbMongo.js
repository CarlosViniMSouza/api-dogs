const mongoose = require('mongoose');

const MongoClient = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/dogs');

        console.log(`Connected MongoDB on ${conn.connection.host}`);
    } catch (error) {
        console.log(error);

        process.exit(1);
    }
}

module.exports = MongoClient;
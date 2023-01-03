const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

// Database connection details;
const detailsConnection = {
    host: 'localhost',
    port: 5432,
    database: 'api-dogs',
    user: 'postgres',
    password: 'adm123',
    allowExitOnIdle: true
};
// You can check for all default values in:
// https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/defaults.js

const connectDB = pgp(detailsConnection); // database instance;

connectDB.tx(async t => {
    const user = await t.one('SELECT $1 AS value', 'John');
    return { user };
})
    .then(({user, event}) => {
        console.log('DATA:', user.id);
    })
    .catch(error => {
        console.log('ERROR:', error);
    });

module.exports = connectDB;

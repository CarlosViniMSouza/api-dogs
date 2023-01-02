const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

// Database connection details;
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'api-dogs',
    user: 'postgres',
    password: 'adm123',
    allowExitOnIdle: true
};
// You can check for all default values in:
// https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/defaults.js

const db = pgp(cn); // database instance;

db.tx(async t => {
    const user = await t.one('SELECT $1 AS value', 'John');
    const event = await t.one('SELECT $1 AS value', 123);
    return {user, event};
})
    .then(({user, event}) => {
        // print new user id + new event id;
        console.log('DATA:', user.id, event.id);
    })
    .catch(error => {
        console.log('ERROR:', error);
    });

module.exports = db;
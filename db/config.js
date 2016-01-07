//create connection here
var pgp = require('pg-promise')();
var connectionString = process.env.DATABASE_URL||"postgres://localhost:5432/recon";

//create new db instance
var db = pgp(connectionString);
module.exports = db;

//to test locally you must create a database 'recon' in postgres


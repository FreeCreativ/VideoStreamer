const pg = require('pg-promise');
const db = pg('postgres://postgres:Dontobec12345@localhost:5432;/family');
module.exports = db;
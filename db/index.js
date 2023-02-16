const pgp = require('pg-promise')(/* options */)

class Database {
    constructor(username, password, database, host, port) {
        this.username = username;
        this.password = password;
        this.database = database;
        this.host = host;
        this.port = port;
    }

    connect() {
        return pgp(`postgres://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}`)
    }
}

let db = new Database('postgres', 'Dontobec12345', 'family', '127.0.0.1', '5432');
const connection = db.connect();
module.exports = connection;

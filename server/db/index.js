var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  // host: '127.0.0.1:3000',
  user: 'root',
  password: 'hr47',
  database: 'chat'
});

module.exports.dbConnection = module.exports.connection;
module.exports.dbConnection.connect();
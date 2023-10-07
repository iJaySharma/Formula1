const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       // Your MySQL server host
  user: 'tmdbuser',            // Your MySQL username
  password: 'tmdbuser',    // Your MySQL password
  database: 'formula1',    // Your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;




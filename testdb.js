const db = require('./db'); // Import the database connection module

// Attempt to connect to the database and run a test query
db.query('SELECT 1', (err, results) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
  } else {
    console.log('Database connection successful.');
    console.log('Test query results:', results);
  }

  // Close the database connection
  db.end();
});
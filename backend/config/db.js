const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // change this to your MySQL username
  password: 'your_password',        // your MySQL password
  database: 'bug_tracker'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL connected...');
});

module.exports = db;

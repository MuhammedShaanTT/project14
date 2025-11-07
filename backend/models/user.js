const db = require('../config/db');

const User = {
  create: (username, password, role, callback) => {
    const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
    db.query(sql, [username, password, role], callback);
  },
  findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], callback);
  }
};

module.exports = User;

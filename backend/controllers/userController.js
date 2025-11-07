const User = require('../models/User');

// Get all users (for admin dashboard)
exports.getAllUsers = (req, res) => {
  const sql = 'SELECT id, username, role FROM users';
  const db = require('../config/db');
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Add new user
exports.addUser = (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role) {
    return res.status(400).json({ message: 'All fields required' });
  }
  User.create(username, password, role, (err) => {
    if (err) throw err;
    res.json({ message: 'User created successfully' });
  });
};

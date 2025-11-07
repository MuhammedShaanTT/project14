const db = require('../config/db');

const Bug = {
  getAll: (callback) => {
    db.query('SELECT * FROM bugs', callback);
  },
  create: (title, description, severity, status, assigned_to, created_by, callback) => {
    const sql = `INSERT INTO bugs (title, description, severity, status, assigned_to, created_by) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [title, description, severity, status, assigned_to, created_by], callback);
  },
  updateStatus: (id, status, callback) => {
    const sql = `UPDATE bugs SET status = ? WHERE id = ?`;
    db.query(sql, [status, id], callback);
  }
};

module.exports = Bug;

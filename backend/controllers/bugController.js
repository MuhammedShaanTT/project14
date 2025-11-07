const Bug = require('../models/Bug');

exports.getAllBugs = (req, res) => {
  Bug.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createBug = (req, res) => {
  const { title, description, severity, status, assigned_to, created_by } = req.body;
  Bug.create(title, description, severity, status, assigned_to, created_by, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Bug added successfully' });
  });
};

exports.updateBugStatus = (req, res) => {
  const { id, status } = req.body;
  Bug.updateStatus(id, status, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Status updated successfully' });
  });
};

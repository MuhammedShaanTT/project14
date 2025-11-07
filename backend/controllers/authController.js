const User = require('../models/User');

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findByUsername(username, (err, results) => {
    if (err) throw err;
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = results[0];
    if (user.password !== password) return res.status(401).json({ message: 'Invalid password' });

    res.json({ message: 'Login successful', role: user.role });
  });
};

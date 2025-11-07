const express = require('express');
const router = express.Router();
const { getAllBugs, createBug, updateBugStatus } = require('../controllers/bugController');

router.get('/', getAllBugs);
router.post('/', createBug);
router.put('/status', updateBugStatus);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createTask,getAllTasks } = require('../controllers/tasks');

// router.route('/').get(getAllTasks);
router.get('/',getAllTasks);
// router.route('/').get(getAllTasks).post(createTask);
router.post('/',createTask);

module.exports = router;

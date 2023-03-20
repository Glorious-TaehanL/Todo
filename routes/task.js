const express = require('express');
const router = express.Router();
const { createTask,getAllTasks } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);


module.exports = router;

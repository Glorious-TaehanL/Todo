const Task = require('../models/task');
const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({msg: error});
    }
    // res.json(req.body);

//   res.send('POST request to the homepage')
}

module.exports = {
    getAllTasks,
    createTask,
}
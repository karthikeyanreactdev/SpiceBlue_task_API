const taskModel = require("../model/task.model.js");

// This controller function handles create new Task request and response 
exports.createTask = async (req, res) => {

  
    try {
        const params = {
            assigned_user:   req.body.assignedTo, 
            task_date:  new Date(req.body.date),
            task_time: req.body.time,
            task_msg:  req.body.taskDescription
           }
        const createEntry = await taskModel.create(params);
        res.status(200).send({
            message: "Task Created Successfully",
        });
    } catch (err) {
        res.status(500).send({
            message: "Task Creatation Failed. Due to Error : " + err,
        });
    }
};

// This controller function handles updates existing Task request and response 
exports.updateTask = async (req, res) => {
    try {
        const params = {
            id: req.body.id,
            assigned_user: req.body.assignedTo, 
            task_date:  new Date(req.body.date),
            task_time: req.body.time,
            task_msg:  req.body.taskDescription
        }
        const updateEntry = await taskModel.update(params);
        res.status(200).send({
            message: "Task Updated Successfully",
        });
    } catch (err) {
        res.status(500).send({
            message: "Task Updation Failed. Due to Error : " + err,
        });
    }
};



// This controller function handles updates existing Task request and response 
exports.getTaskbyid = async (req, res) => {
    try {
        const id = req.params.id
        const Task = await taskModel.getbyid(id);
        res.status(200).send({
            data: Task,
            message: "Task status Updated Successfully",
        });
    } catch (err) {
        res.status(500).send({
            data: [],
            message: "Task status Updation Failed. Due to Error : " + err,
        });
    }
};

// This controller function handles get  all Tasks request and response 
exports.getallTasks = async (req, res) => {
    try {
        const Tasks = await taskModel.getall();
        res.status(200).send({
            data: Tasks,
            message: "All Tasks Fetched Successfully.",
        });
    } catch (err) {
        res.status(500).send({
            data: [],
            message: "All Tasks Fetching Failed. Due to Error : " + err,
        });
    }
};


// This controller function handles updates existing Task request and response 
exports.deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        const Task = await taskModel.deletebyid(id);
        res.status(200).send({
            message: "Task Deleted Successfully",
        });
    } catch (err) {
        res.status(500).send({
            message: "Task Deletion Failed. Due to Error : " + err,
        });
    }
};


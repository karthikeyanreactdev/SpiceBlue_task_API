// importing pool to connect DB
const pool = require("../../db");

// This function creates task entry in DB
exports.create = async (data) => {
    const taskCreate = await pool.query(
        "INSERT INTO task (assigned_user,task_date,task_time,task_msg) VALUES($1,$2,$3,$4) RETURNING *",
        [data.assigned_user, data.task_date, data.task_time,data.task_msg]
    );
    return taskCreate.rows;
};

// This function updates a existing task entry in DB
exports.update = async (data) => {
    const taskUpdate = await pool.query(
        "UPDATE  task SET assigned_user=$1, task_date=$2,task_time=$3,task_msg=$4    WHERE id = $5 RETURNING *",
        [data.assigned_user, data.task_date, data.task_time,data.task_msg, data.id]
    );
    return taskUpdate.rows;
};

// This function get task based on id from DB
exports.getbyid = async (id) => {
    const task = await pool.query("SELECT * FROM task WHERE id = $1", [
        id
    ]);
    return task.rows[0];
};

// This function get all task from DB
exports.getall = async () => {
    const alltask = await pool.query(
        "SELECT *FROM task");
    return alltask.rows;
};

// This function deletd a task based on id in DB
exports.deletebyid = async (id) => {
    const taskDelete = await pool.query(
        "DELETE  FROM task WHERE  id=$1", [id]);
    return taskDelete;
}
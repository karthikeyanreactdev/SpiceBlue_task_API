//
module.exports = app => {

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        )
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
        if (req.method === 'OPTIONS') {
            res.header(
                "Access-Control-Allow-Methods",
                "GET, POST, OPTIONS, PUT, PATCH, DELETE"
            )
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
            return res.status(200).json({});

        }
        next();
    });
    var VerifyToken = require('./VerifyToken');
    const taskController=require('../controller/task.controller');
    
    app.post("/create", VerifyToken.verifyToken,taskController.createTask);
    app.post("/update", VerifyToken.verifyToken,taskController.updateTask);
    app.get("/getall", VerifyToken.verifyToken,taskController.getallTasks);
    app.delete("/delete/:id", VerifyToken.verifyToken,taskController.deleteTask);
    app.get("/getbyid/:id",VerifyToken.verifyToken, taskController.getTaskbyid);


  };
  



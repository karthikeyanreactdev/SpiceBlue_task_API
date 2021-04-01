var jwt = require('jsonwebtoken');
const jwt1 = require('express-jwt');


function verifyToken(req, res, next) {
  var token = req.headers['x-auth-token'];

  if (!token)
  {
    console.log("No token provided.")
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }   
    
  jwt.verify(token, 'supersecret', function(err, decoded) {
    if (err)    {
     return res.status(400).send({ auth: false, message: 'Failed to authenticate token.' });
    } 
    next();
  });
}


module.exports = { verifyToken };
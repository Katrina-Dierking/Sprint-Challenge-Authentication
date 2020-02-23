const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, process.env.JWT_Secret, (err, decodedToken) => {
      if(err) {
        console.log('failed to verify', err);
        res.status(401).json
        ({
          success: false,
          errorMessage: "AuthMW: You know you don't belong here. Go home."
        });
      } else {
        req.user = {password:decodedToken.password};
        next();
      }
    });

  } else {
    res.status(401).json
    ({
      success: false, 
      errorMessage: 'AuthMW: too bad so sad'
    })
  };
 
};

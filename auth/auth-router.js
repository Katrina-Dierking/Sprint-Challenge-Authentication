const router = require('express').Router();
const bcrypt = require('bycrptjs');

const Users = require('../users-users-model.js')


router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcyrpt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json ({
          user:saved,
      });
    })
    .catch (error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let {username, password} = req.body;

  Users.findBy({username})
  .first()
  .then (user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user)
      res.status(200).json 
      ({
        success: true,
        message: `Come on in, ${user.username}`,
        token
      });

    } else {
      res.status(401).json
      ({ 
        success: false,
        errorMessage: 'Invalid Credentials. Try again'
      });
    }
  })
    .catch(error => {
      res.status(500).json(error)
    });
});

function generateToken(user) {
  const payload ={
    username: user.username,
    password: user.password
  };
  const options = {
    expiresIn= '1d'
  };
  return jwt.sign(payload, process.env.JWT_Secret, options)
}

module.exports = router;

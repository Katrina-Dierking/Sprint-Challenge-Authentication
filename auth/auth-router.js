const router = require('express').Router();
const bcrypt = require('bycrptjs');

const Users = require('../users-users-model.js')
const restricted = require('../auth/restircted-middleware');

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;

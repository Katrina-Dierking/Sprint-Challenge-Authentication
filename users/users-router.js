const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/authenticate-middleware');

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => res.send(error));
});

router.post ('/', (res, res) => {
    Users.add(req.body)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;
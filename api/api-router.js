const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require ('../users/users-router');
const jokesRouter = require ('../jokes/jokes-router');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/jokes', jokesRouter);

router.get('/', (req, res) => {
    res.json 
    ({
        api: "Jokes on you!"
    });
});

module.exports = router;
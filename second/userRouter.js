const express = require('express');
const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log('Time', new Date);
    next();
})

userRouter.get('/', (req, res) => {
    const users = { 'a': 'b' };
    res.send(users);
})

userRouter.get('/:userId', (req, res) => {
    const user = { 'b': 'c' };
    res.send(user)
})

module.exports = userRouter;
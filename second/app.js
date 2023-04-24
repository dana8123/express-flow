const express = require('express');
const app = express();
const userRouter = require('./userRouter')
const port = 3000;
const connect = require('./schema');
const { post } = require('./userRouter');

connect();

app.use(express.json());

app.use('/user', userRouter)


app.listen(port, () => {
    console.log(`${port} port 가 열렸습니다.`)
})
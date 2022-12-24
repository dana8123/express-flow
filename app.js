const express = require('express')
const app = express();
const port = 3010;
const a = require('./router')
// routing 

app.use('/test', a)



app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(port, () => {
    console.log("3010번 포트가 열려있습니다!")
})
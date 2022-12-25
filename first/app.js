const express = require('express')
const app = express();
const port = 3010;
const apiRouter = require('./router')
const bodyParser = require('body-parser')

// body parser
app.use(express.json())

// routing 
app.use('/api', apiRouter)



app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(port, () => {
    console.log("3010번 포트가 열려있습니다!")
})
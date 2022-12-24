const express = require('express')
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('hihi! i am send!')
})

router.get('/chicken', (req, res) => {
    const testJson = {
        "hi": "hello"
    }
    res.send(testJson)
})


module.exports = router;
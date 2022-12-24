const express = require('express')
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', new Date)
    next()
})

router.get('/posts', (req, res) => {
    const message = "안녕하세요 get posts API 입니다.";

    res.send(message)
})



router.post('/posts', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const message = "안녕하세요 post posts API 입니다.";

    const resObj = { message, title, content }
    res.send(resObj)
})


module.exports = router;
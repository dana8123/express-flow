const express = require('express');
const UserModel = require('./schema/user');
const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('Time', new Date);
  next();
})

userRouter.get('/', async (req, res) => {
  try {
    const userGroup = await UserModel.find();
    console.log("안끝나?>>", userGroup)
    res.send(userGroup)
  } catch (err) {
    throw new Error(err)
  }

})

userRouter.post('/', async (req, res) => {
  const user = {
    name: 'yj',
    email: 'yj@naver.com',
    text: '안녕하세요?'
  }
  try {
    await UserModel.create(user)
    res.send('유저가 등록되었습니다.');
  } catch (e) {
    throw new Error(e)
  }
})

userRouter.get('/:userId', (req, res) => {
  // 생략
  res.send(user)
})

module.exports = userRouter;
const Router = require('express');
const router = new Router;
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const menuItemRouter = require('./menuItemRouter');

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/menu-item', menuItemRouter)

module.exports = router;
const {Router} = require("express");
const router = new Router()
const aboutRouter = require("./aboutRouter")
const moduleRouter = require("./moduleRouter")
const workoutRouter = require("./workoutRouter")
const userRouter = require("./userRouter")
const groupsRouter = require("./groupsRouter")


router.use('/user', userRouter)
router.use('/about', aboutRouter)
router.use('/workout', workoutRouter)
router.use('/groups', groupsRouter)
router.use('/module', moduleRouter)
// router.use('/card_')


module.exports  = router
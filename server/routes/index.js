const {Router} = require("express");
const router = new Router()
const aboutRouter = require("./aboutRouter")
const moduleRouter = require("./moduleRouter")
const workoutRouter = require("./workoutRouter")
const userRouter = require("./userRouter")
const groupsRouter = require("./groupsRouter")
const cardRouter = require("./cardRouter")
const groupModuleRouter = require("./groupModuleRouter")
const iconRouter = require("./iconRouter")

router.use('/user', userRouter)
router.use('/groups', groupsRouter)
router.use('/about', aboutRouter)
router.use('/workout', workoutRouter)
router.use('/module', moduleRouter)
router.use('/card', cardRouter)
router.use('/group-module', groupModuleRouter)
router.use('/icon', iconRouter)

module.exports  = router
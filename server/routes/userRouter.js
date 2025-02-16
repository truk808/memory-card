const {Router} = require("express");
const router = new Router()
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middleware/authmiddleware");

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)

module.exports  = router
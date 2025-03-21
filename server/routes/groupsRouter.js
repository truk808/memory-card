const {Router} = require("express");
const GroupController = require("../controllers/groupController");
const router = new Router()

router.get('/', GroupController.getGroups)
router.post('/', GroupController.createGroup)



module.exports  = router
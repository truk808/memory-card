const {Router} = require("express");
const GroupController = require("../controllers/groupController");
const router = new Router()

router.get('/', GroupController.getGroups)
router.post('/', GroupController.createGroup)
router.delete('/:id', GroupController.deleteGroup)
router.put('/:id', GroupController.updateGroup)

module.exports  = router
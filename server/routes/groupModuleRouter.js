const {Router} = require("express");
const router = new Router()
const GroupModuleController = require("../controllers/groupModuleController");

router.post('/', GroupModuleController.addModuleToGroup);
router.get('/', GroupModuleController.getUserModulesFromGroups);

module.exports  = router
const {Router} = require("express");
const router = new Router()
const GroupModuleController = require("../controllers/groupModuleController");

router.post('/', GroupModuleController.addModuleToGroup);
router.get('/all-group-module-user', GroupModuleController.getUserModulesFromGroups);

module.exports  = router
const {Router} = require("express");
const router = new Router()
const moduleController = require("../controllers/moduleController");

router.post('/', moduleController.createModule);
router.get('/', moduleController.getModules);
router.get('/:id', moduleController.getOneModule);

module.exports  = router
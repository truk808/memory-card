const {Router} = require("express");
const router = new Router()
const moduleController = require("../controllers/moduleController");

router.post('/', moduleController.create);
router.get('/', moduleController.getAll);
router.get('/:id', moduleController.getOne);

module.exports  = router
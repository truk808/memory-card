const {Router} = require("express");
const IconController = require("../controllers/iconController");
const router = new Router()

router.get('/', IconController.getAll)
router.post('/', IconController.create)
router.delete('/:id', IconController.delete)


module.exports  = router
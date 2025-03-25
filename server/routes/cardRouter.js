const {Router} = require("express");
const router = new Router()
const cardController = require("../controllers/cardController");

router.post('/', cardController.createCard);
router.put('/:id', cardController.updateCard);
router.get('/', cardController.getAll);
router.get('/from-module/:id', cardController.getCardFromModule)

module.exports  = router
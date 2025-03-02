const {Card} = require('../models/models');
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class CardController {
    async create(req, res, next) {
        try {
            const {module_id, side_one, side_two} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const card = await Card.create({module_id, side_one, side_two, img: fileName});

            res.json(card);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res) {
        const cards = await Card.findAll()
        res.json(cards)
    }

    async delete(req, res) {

    }
}

module.exports = new CardController()
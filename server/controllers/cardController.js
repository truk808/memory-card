const {Card, Module} = require('../models/models');
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class CardController {
    async getAll(req, res) {
        const {moduleId} = req.body
        const card = await Card.findAll({where: {moduleId: moduleId}});
        return res.json(card)
    }

        async getCardFromModule(req, res, next) {
        const {moduleId} = req.query;
        const cards = await Card.findAll({where: {moduleId: moduleId}});
        return res.json(cards)
    }

    async create(req, res, next) {
        try {
            const {moduleId, sideOne, sideTwo} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const card = await Card.create({moduleId, sideOne, sideTwo, img: fileName});

            res.json(card);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async delete(req, res) {

    }
}

module.exports = new CardController()
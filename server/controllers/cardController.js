const {Card, Module} = require('../models/models');
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const {where} = require("sequelize");
const {logger} = require("sequelize/lib/utils/logger");

// const {img} = req.files;
// let fileName = uuid.v4() + ".jpg"
// img.mv(path.resolve(__dirname, '..', 'static', fileName));

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

    async createCard(req, res, next) {
        try {
            const {moduleId} = req.body;
            const card = await Card.create({moduleId, side_one: '', side_two: '', img: "defult"});
            res.json(card);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateCard(req, res, next) {
        const {newCard} = req.body;
        const {id} = req.params;
        const card = await Card.findOne({where: {id}});
        if (!card) {
            return next(ApiError.badRequest("Карта не найдена"));
        }
        card.side_one = newCard.side_one;
        card.side_two = newCard.side_two;
        card.img = newCard.img;
        await card.save();
        return res.json(card);
    }

    async deleteCard(req, res, next) {
        try {
            const { id } = req.params;
            const card = await Card.destroy({ where: { id } });

            if (!card) {
                return next(ApiError.badRequest("Карта не найдена"));
            }

            return res.json(card);
        } catch (error) {
            return next(ApiError.internal("Ошибка сервера"));
        }
    }
}

module.exports = new CardController()
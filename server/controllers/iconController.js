const ApiError = require("../error/ApiError");
const {IconModules} = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const {where} = require("sequelize");

class IconController {
    async getAll(req, res, next) {
        const icon = await IconModules.findAll()
        return res.json(icon);
    }

    async create(req, res, next) {
        const {img} = req.files;
        let fileName = uuid.v4() + ".svg"
        await img.mv(path.resolve(__dirname, '..', 'static', 'icon', fileName));

        const icon = await IconModules.create({icon: fileName});

        return res.json(icon);
    }

    async delete(req, res, next) {
        const {id} = req.params;
        const icon = await IconModules.destroy(id);
        return res.json(icon);
    }
}

module.exports = new IconController()
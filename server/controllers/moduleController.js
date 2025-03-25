const {Module} = require('../models/models');
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class ModuleController {
    async getModules(req, res, next) {
        const {userId} = req.query;
        const modules = await Module.findAll({where: {userId: userId}});
        return res.json(modules)
    }

    async getOneModule(req, res, next) {
        const {moduleId} = req.query;
        const modules = await Module.findOne({where: {id: moduleId}})
        return res.json(modules)
    }

    async createModule(req, res, next) {
        const {userId, name, description} = req.body;

        // const {img} = req.files;
        // let fileName = uuid.v4() + ".jpg"
        // img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const modules = await Module.create({name, userId, description, img: null});
        return res.json(modules)
    }

    async delete(req, res) {

    }
}

module.exports = new ModuleController()
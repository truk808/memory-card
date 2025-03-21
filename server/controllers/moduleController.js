const {Module} = require('../models/models');
const ApiError = require("../error/ApiError");

class ModuleController {
    async getModules(req, res, next) {
        const {userId} = req.body
        const modules = await Module.findAll({where: {userId: userId}});
        return res.json(modules)
    }

    async createModule(req, res, next) {
        const {userId, name, description} = req.body;
        const modules = await Module.create({name, userId, description});
        return res.json(modules)
    }

    async delete(req, res) {

    }
}

module.exports = new ModuleController()
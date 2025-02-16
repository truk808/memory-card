const {Module} = require('../models/models');
const ApiError = require("../error/ApiError");

class ModuleController {
    async create(req, res) {
        const {name} = req.body;
        const module = await Module.create({name})
        return res.json(module)
    }

    async getAll(req, res) {
        const modules = await Module.findAll()
        return res.json(modules)
    }

    async getOne(req, res) {
        const {id} = req.params
        const module = await Module.findOne(
            {
                where: {id},
            }
        )
        return res.json(module)
    }

    async delete(req, res) {

    }
}

``

module.exports = new ModuleController()
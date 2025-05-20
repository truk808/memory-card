const {Module, Card} = require('../models/models');
const ApiError = require("../error/ApiError");

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
        const {userId, name, description, icon} = req.body;

        const modules = await Module.create({name, userId, description, icon: icon || null});
        return res.json(modules)
    }

    async updateModule(req, res, next) {
        const {newModule} = req.body;
        const {id} = req.params;
        const module = await Module.findOne({where: {id}});
        if (!module) {
            return next(ApiError.badRequest("Модуль не найден"));
        }
        module.name = newModule.name;
        module.description = newModule.description;
        module.icon = newModule.icon;
        module.save()
        return res.json(module);
    }

    async deleteModule(req, res, next) {
        try {
            const { id } = req.params;
            const module = await Module.destroy({ where: { id } });

            if (!module) {
                return next(ApiError.badRequest("Модуль не найден"));
            }

            return res.json(module);
        } catch (error) {
            return next(ApiError.internal("Ошибка сервера"));
        }
    }
}

module.exports = new ModuleController()
const {Group, GroupModule} = require("../models/models");
const ApiError = require("../error/ApiError");

class GroupController {
    async getGroups(req, res, next) {
        const {userId} = req.query
        const groups = await Group.findAll({where: {userId: userId}});
        return res.json(groups)
    }

    async createGroup(req, res, next) {
        const {userId, name} = req.body;
        const group = await Group.create({name, userId});
        return res.json(group)
    }

    async updateGroup(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            if (!id || !name) {
                return next(ApiError.badRequest("Некорректные данные"));
            }

            const group = await Group.findByPk(id);
            if (!group) {
                return next(ApiError.badRequest("Группа не найдена"));
            }

            group.name = name;
            await group.save();

            return res.json(group);
        } catch (error) {
            return next(ApiError.internal("Ошибка при обновлении группы"));
        }
    }

    async deleteGroup(req, res, next) {
        const {id} = req.params;
        const groupModule = await Group.destroy({where: { id }});
        return res.json(groupModule);
    }
}

module.exports = new GroupController()
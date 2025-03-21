const {GroupModule, Module, Group, User} = require('../models/models');
const ApiError = require("../error/ApiError");

class groupModuleController {
    async getUserModulesFromGroups (req, res, next) {
        try {
            const {userId} = req.query

            if (!userId) {
                return next(ApiError.badRequest("пользователь не найден"));
            }

            const groups = await Group.findAll({ where: { userId }, attributes: ["id"] });
            const groupIds = groups.map(group => group.id);

            if (groupIds.length === 0) {
                return res.json([]);
            }

            const groupModules = await GroupModule.findAll({
                where: { groupId: groupIds },
                attributes: [["id", "id"], ["groupId", "groups_id"], ["moduleId", "modules_id"]],
            });

            return res.json(groupModules);
        } catch (e) {
            return next(ApiError.internal("Ошибка при получении модулей пользователя из групп"));
        }

    }

    async addModuleToGroup(req, res, next) {
        try {
            const { groupId, moduleId } = req.body;

            const cgroupModule = GroupModule.findOne({where: {groupId, moduleId}})

            if (cgroupModule.length === 0) {
                return next(ApiError.badRequest("Группа и модуль с такими id уже добавлены"));
            }

            const group = await Group.findByPk(groupId);
            const module = await Module.findByPk(moduleId);

            if (!group || !module) {
                return next(ApiError.badRequest("Группа или модуль не найдены"));
            }

            const groupModule = await GroupModule.create({ groupId, moduleId });
            return res.json(groupModule);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new groupModuleController();
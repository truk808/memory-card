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

    async getModulesByGroupId (req, res, next) {
        const {groupId} = req.query;

        if (!groupId) {
            return res.json([]);
        }

        const groupModules = await GroupModule.findAll({
            where: { groupId },
            attributes: [["id", "id"], ["groupId", "groups_id"], ["moduleId", "modules_id"]],
        });

        return res.json(groupModules);
    }

    async addModuleToGroup(req, res, next) {
        try {
            const { groupId, moduleId } = req.body;

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

    async deleteGroupModule(req, res, next) {
        try {
            const { groupId } = req.body;

            if (!groupId) {
                return next(ApiError.badRequest("Некорректные данные"));
            }

            const deletedRowCount = await GroupModule.destroy({
                where: { groupId }
            });

            console.log(deletedRowCount);

            // if (deletedRowCount === 0) {
            //     return ;
            // }

            return res.json(deletedRowCount);
        } catch (error) {
            return next(ApiError.internal("Ошибка при удалении модуля из группы"));
        }
    }
}

module.exports = new groupModuleController();
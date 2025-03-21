const {Group} = require("../models/models");
// const ApiError = require("../error/ApiError");

class GroupController {
    async getGroups(req, res, next) {
        const {userId} = req.query
        const groups = await Group.findAll({where: {userId: userId}});
        // const groups = await Group.findAll();
        return res.json(groups)
    }

    async createGroup(req, res, next) {
        const {userId, name} = req.body;
        const group = await Group.create({name, userId});
        return res.json(group)
    }
}

module.exports = new GroupController()
const sequelize = require('../db');
const {Database, DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING},
    subscription: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING},
})

const GroupModule = sequelize.define('group_module', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Module = sequelize.define('module', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    // icon: {type: DataTypes. }  fewfefe
})

const ModuleStats = sequelize.define('module_stats', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_cards: {type: DataTypes.INTEGER},
    learned_cards : {type: DataTypes.INTEGER},
    not_learned_cards: {type: DataTypes.INTEGER},
    total_time_spent: {type: DataTypes.INTEGER},
    date: {type: DataTypes.DATE},
})

const Card = sequelize.define('card', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    side_one: {type: DataTypes.STRING},
    side_two: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false},
})

const GameStats = sequelize.define('game_stats', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING},
    total_time_spent: {type: DataTypes.INTEGER},
    score: {type: DataTypes.INTEGER},
    date: {type: DataTypes.DATE},

})

User.hasMany(Group)
Group.belongsTo(User)

User.hasMany(Module)
Module.belongsTo(User)

Group.belongsToMany(Module, {through: GroupModule})
Module.belongsToMany(Group, {through: GroupModule})

Module.hasMany(Card)
Card.belongsTo(Module)

Module.hasMany(ModuleStats)
ModuleStats.belongsTo(Module)

User.hasMany(GameStats)
GameStats.belongsTo(User)

module.exports = {
    User,
    Group,
    Module,
    ModuleStats,
    Card,
    GameStats,
}
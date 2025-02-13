require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate() // устанавливается подключение к бд
        await  sequelize.sync() // сверяет состояние бд со схемой данных
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })
    } catch (e) {
        console.error(e);
    }
}


start()
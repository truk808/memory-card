require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.json())
app.use('/api', router);

app.use(errorHandler);

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
require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const fileuploads = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const cors = require('cors')

const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});
app.use(express.json());
app.use(fileuploads(    {}))
app.use(express.static(path.resolve(__dirname, 'static')));
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
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const {User} = require("../models/models");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, subscription) => {
    return jwt.sign(
        {id, email, subscription},
        process.env.SECRET_KEY,
        {expiresIn: "24h"}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, subscription} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Invalid email or password"));
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest("User already exists"));
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({email, password: hashedPassword});
        const token = generateJwt(user.id, user.email, user.subscription);

        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest("пользователь не найден"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }

        const token = generateJwt(user.id, user.email, user.subscription);
        return res.json({token})
    }

    async check(req, res, next) {
        res.json("Успешно")
        const token = generateJwt(req.user.id, req.user.email, req.user.subscription);
        return res.json({token})
    }
}

module.exports = new UserController()
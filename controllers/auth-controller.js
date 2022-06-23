const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
require("dotenv").config();

const generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, process.env.JWTSecret, {expiresIn: "24h"} )
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Ошибка при регистрации", errors })
            }       
            const { email, password } = req.body;
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким e-mail уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({ email, password: hashPassword })
            await user.save();
            return res.json({ message: "Пользователь успешно зарегистрирован" })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Ошибка регистрации' })
        }
    }
    
    async login(req, res) { 
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) { 
                return res.status(400).json({ message: "E-mail не найден" })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) { 
                return res.status(400).json({ message: "Неверные данные" })
            }
            const token = generateAccessToken(user._id)
            const userEmail = user.email
            const userId = user._id
            return res.json({ token, userEmail, userId})
        } catch (e) { 
            console.log(e)
            res.status(400).json({ message: "Ошибка входа в систему" })
        }
    }

    async getUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({email})
            res.json(user.email)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController()
const Router = require('express');
const controller = require('../controllers/auth-controller');
const authMiddleware = require("../middleware/auth-middleware")
const { check } = require("express-validator");

const router = new Router()

router.post('/registration', [
    check('email', "Введите корректный e-mail").isEmail(),
    check('password', "Пароль должен быть не менее 6 символов").isLength({min:6})
], controller.registration);

router.post('/login', [
    check('email', "Неверные данные").normalizeEmail().isEmail(),
    check('password', "Неверные данные").isLength({min:6})
], controller.login)

router.get('/user', authMiddleware, controller.getUser)

module.exports = router
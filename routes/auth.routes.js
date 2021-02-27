const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');
const { check } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const router = Router();

router.post(
  '/registration',
  [
    check('email', 'Введите валидный email').isEmail(),
    check('password', 'Пароль должен быть не менее 6 символов').isLength({ min: 6 }),
  ],
  AuthController.registration
);
router.post('/login', AuthController.login);
router.get('/users', roleMiddleware(['ADMIN']), AuthController.getUsers);

module.exports = router;

const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Cart} = require('../models/models')

const generateJwt = (id, email, role, userName, userTel) => {
    return jwt.sign({id, email, role, userName, userTel}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class userController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            if(!email || !password) {
                return next(ApiError.badRequest('Некорректные данные'));
            }
    
            // ТОЛЬКО СОЗДАНИЕ ПОЛЬЗОВАТЕЛЯ
            const user = await User.create({
                email,
                password: await bcrypt.hash(password, 5),
                role: 'USER'
            });

            const token = generateJwt(user.id, user.email, user.role, user.userName, user.userTel) 
    
            return res.json({token});
        } catch (e) {
            console.error('FULL ERROR:', e); // Важно!
            return next(ApiError.internal(e.message)); // Возвращаем настоящую ошибку
        }

        /* 
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }

        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const cart = await Cart.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role) 

        return res.json({token})
         */

    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if(!user){
            return next(ApiError.internal('Пользователя с таким email не существует'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Введён неверный пароль'))
        }

        const token = generateJwt(user.id, user.email, user.role, user.userName, user.userTel)

        return res.json({token})
    }

    async checkAuth(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.userName, req.user.userTel);

        return res.json({token});
    }
}

module.exports = new userController();

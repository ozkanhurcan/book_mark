const Joi = require('joi')
const { password } = require('./custom.validation')

const register = {
    body: Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
        confirm_password: Joi.any().equal(Joi.ref('password'))
            .required()
            .label('Confirm password')
            .messages({ 'any.only': '{{#label}} does not match' })
    })
}

const login = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })
}

const logout = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    })
}

module.exports = {
    register,
    login,
    logout
}
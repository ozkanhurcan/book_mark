const { User } = require("../models/user")
const bcrypt = require('bcryptjs')
const ApiError = require("../errors/ApiError")
const httpStatus = require("http-status")
const { Token } = require("../models/token")

const register = async (data) => {
    data.password = await bcrypt.hash(data.password, 10)
    return await User.create(data).catch(err => {
        throw err
    })
}

const loginUserWithEmailAndPassword = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user || !(await passwordMatch(password, user))) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
    }
    return user;
};

const getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email: email } })
    return user
}

const passwordMatch = async (password, user) => {
    console.log(password)
    return bcrypt.compare(password, user.password)
}

const blacklistToken = async (tokenString) => {
    const token = await Token.findOne({ where: { token: tokenString, blacklisted: false } })
    if (!token) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
    }
    await token.update({ blacklisted: true })
    return true
}


module.exports = {
    register,
    loginUserWithEmailAndPassword,
    blacklistToken
}
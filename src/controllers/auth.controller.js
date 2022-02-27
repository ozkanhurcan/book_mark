const httpStatus = require("http-status")
const { authService, tokenService } = require("../services")
const catchAsync = require("../utils/catchAsync")

const register = catchAsync(async (req, res) => {
    user = await authService.register(req.body)
    token = await tokenService.generateAuthTokens(user)
    res.status(200).send({ user, token })
})

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const tokens = await tokenService.generateAuthTokens(user);
    res.send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
    await authService.blacklistToken(req.body.refreshToken);
    res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
    login,
    register,
    logout
}
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const { default: helmet } = require('helmet')
const routes = require('./routes/v1')
const bodyParser = require('body-parser')
const { errorConverter, errorHandler } = require('./middlewares/error.middleware')
const config = require('./config/config');
const { jwtStrategy } = require('./config/passport');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan')
const ApiError = require('./errors/ApiError')
const httpStatus = require('http-status')
dotenv.config();

const app = express()
global.authUser = undefined



app.use(helmet())

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(express.urlencoded({ extended: true }))

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/api/v1', routes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);

app.use(errorHandler);


module.exports = {
    app
}
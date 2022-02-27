const Joi = require('joi')

const getBooks = {
    query: Joi.object().keys({
        page: Joi.number(),
        pageSize: Joi.number(),
        keyword: Joi.string(),
        minPageNum: Joi.number(),
        maxPageNum: Joi.number()
    })
}

module.exports = {
    getBooks
}
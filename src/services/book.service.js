const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Book } = require("../models/books")


const paginateBooks = async (page = 1, pageSize = 20, keyword, minPageNum, maxPageNum) => {
    const whereQuery = await createWhereQuery(keyword, minPageNum, maxPageNum)
    return Book.findAndCountAll({
        where: whereQuery,
        limit: pageSize,
        offset: (page - 1) * parseInt(pageSize)
    }).then(result => result.rows)
        .catch(err => {
            throw err
        })
}

const getBookByIds = async (bookId) => {
    return await Book.findOne({
        where: {
            id: bookId
        }
    })
}

const createWhereQuery = async (keyword, minPageNum, maxPageNum) => {
    let whereQuery = {}
    if (keyword !== undefined) {
        whereQuery.name = {
            [Op.like]: `%${keyword}%`
        }
    }
    if (minPageNum !== undefined && maxPageNum !== undefined) {
        whereQuery.page_count = {
            [Op.between]: [minPageNum, maxPageNum]
        }
    }
    return whereQuery
}

module.exports = {
    paginateBooks,
    getBookByIds
}
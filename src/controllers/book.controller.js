const { bookService } = require("../services");
const catchAsync = require("../utils/catchAsync");



const getBooks = catchAsync(async (req, res) => {
    const {page, pageSize, keyword, minPageNum, maxPageNum} = req.query
    const books = await bookService.paginateBooks(page, pageSize, keyword, minPageNum, maxPageNum)

    return res.send(books)
})

const getBookById = catchAsync(async (req, res) => {
    const book = await bookService.getBookByIds(req.params.bookId)
    return res.send(book)
})


module.exports = {
    getBooks,
    getBookById
}
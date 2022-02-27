const httpStatus = require("http-status");
const { bookmarkService } = require("../services");
const catchAsync = require("../utils/catchAsync");


const getBookmarks = catchAsync(async (req, res) => {
    const bookmarks = await bookmarkService.getBookmarks()
    return res.send(bookmarks)
})

const addBookmark = catchAsync(async (req, res) => {
    await bookmarkService.addBookmark(req.params.bookId)
    res.status(httpStatus.NO_CONTENT).send();
})

const delBookMark = catchAsync(async (req, res) => {
    await bookmarkService.delBookmark(req.params.bookId)
    res.status(httpStatus.NO_CONTENT).send();
})


module.exports = {
    getBookmarks,
    addBookmark,
    delBookMark
}
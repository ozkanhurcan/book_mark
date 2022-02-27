const { Bookmark } = require("../models/bookmarks")
const { Book } = require("../models/books")
const { User } = require("../models/user")


const getBookmarks = async () => {
    const user = await User.findOne({
        where: {
            id: global.authUser.id
        },
        include: [
            {
                model: Book,
                attributes: Book.attributes,
                through: {}

            }
        ],
    })
    return user.Books ?? []
}

const addBookmark = async (bookId) => {
    const user = await User.findOne({ where: { id: global.authUser.id } })
    const book = await Book.findOne({ where: { id: bookId } })
    try {
        await user.addBooks(book, { through: { selfGranted: false } })
    } catch (err) { 
        console.log(err)
        throw err 
    }

}

const delBookmark = async (bookId) => {
    const user = await User.findOne({ where: { id: global.authUser.id } })
    const book = await Book.findOne({ where: { id: bookId } })
    try {
        await user.removeBooks(book, { through: { selfGranted: false } })
    } catch (err) { 
        console.log(err)
        throw err 
    }

}


module.exports = {
    getBookmarks,
    addBookmark,
    delBookmark
}
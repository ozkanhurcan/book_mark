module.exports.authService = require('./auth.service')
module.exports.tokenService = require('./token.service')
if (process.env.ELASTIC_ENABLE) {
    module.exports.bookService = require('./elastic.service')
} else {
    module.exports.bookService = require('./book.service')
}
module.exports.bookmarkService = require('./bookmark.service')
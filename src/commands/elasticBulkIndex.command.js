const { Book } = require('../models/books')
const client = require('../utils/elasticsearch')

books = Book.findAll().then(async data => {
    for (i in data) {
        data[i].keyword = data[i].name + ' ' + data[i].author_name
        payload = JSON.parse(JSON.stringify(data[i]))
        payload.keyword = payload.name + ' ' + payload.author_name
        await client.index({
            id: payload.id,
            index: 'books',
            body: payload
        }).then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }
})
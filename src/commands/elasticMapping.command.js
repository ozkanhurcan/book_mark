const client = require('../utils/elasticsearch')
const fs = require('fs')

const data = fs.readFile('src/storage/elasticsearch/books.json', 'utf8' , (err, data) => {
  if (err) {
    return err
  }
  data = JSON.parse(data)
  client.indices.create(data)
})


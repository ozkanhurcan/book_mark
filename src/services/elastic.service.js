const client = require("../utils/elasticsearch")



const paginateBooks = async (page = 1, pageSize = 20, keyword, minPageNum, maxPageNum) => {
    const whereQuery = await createWhereQuery(keyword, minPageNum, maxPageNum)
    data = await client.search({
        index: 'books',
        type: '_doc',
        size: pageSize,
        from: (page - 1) * pageSize,
        body: {
            query: whereQuery
        }
    })
    return await getDataFromElasticResponse(data)
}

const getDataFromElasticResponse = async (data) => {
    let response = []
    for (i in data.hits.hits) {
        response.push(data.hits.hits[i]._source)
    }
    return response
}

const getBookByIds = async (bookId) => {

}

const createWhereQuery = async (keyword, minPageNum, maxPageNum) => {
    let whereQuery = {
        bool: {
            filter: [],
            must: []
        }
    }
    if (keyword !== undefined) {
        whereQuery.bool.filter.push(
            {
                bool: {
                    should: {
                        match: {
                            keyword: {
                                query: `*${keyword}*`,
                                operator: 'and'
                            }
                        }
                    }

                }
            })
    }
    if (minPageNum !== undefined && maxPageNum !== undefined) {
        whereQuery.bool.must.push({
            range: {
                page_count: {
                    gte: minPageNum,
                    lte: maxPageNum
                }
            }
        })
    }
    return whereQuery
}

module.exports = {
    paginateBooks,
    getBookByIds
}
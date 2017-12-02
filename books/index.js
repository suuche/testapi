const express = require('express')
const router = express.Router()

let book = [
    {
        title: 'In one day',
        isbn: '1234',
        author: 'Mike'
    },
    {
        title: 'Lolipop',
        isbn: '2345',
        author: 'Daniel'
    },
    {
        title: 'Fuck API',
        isbn: '6969',
        author: 'Someone'
    }
]

router.get('/book', (req,res) => {
    res.json(book)
})

router.get('/book/:isbn', (req, res)=> {
    res.json(book.find(book => book.isbn === req.params.isbn));
})

module.exports = router
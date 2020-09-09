const router = require('express').Router()
const { Item } = require('../models')

//   GET all items(read)
router.get('/item', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
})


//  POST one item(create)
router.post('/item', (req, res) => {
    Item.create(req.body)
        .then(item => res.json(item))
        .catch(err => console.log(err))
})


//   PUT one item (Update)
router.put('/items/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//  DELETE one item 
router.delete('/items/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router

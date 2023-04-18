    const router = require('express').Router()
    const {Item} = require('../models')
//GET all items
    router.get('/', async (req, res) => {
        try{
            const itemData = await Item.findAll()
            res.status(200).json(itemData)
        }catch(err){
            res.status(400).json({message:'There was a problem wih your GET request. (Item)', err})
        }
    })
//GET one item by id
    router.get('/:id', async (req, res) => {
        try{
            const itemData = await Item.findByPk(req.params.id)
            res.status(200).json({itemData})
        }catch(err){
            res.status(400).json({message:'There was a problem with your GET request.(Item)', err})
        }
    })
//POST one item
    router.post('/', async (req, res) => {
        try{
            console.log(req.body)
            const itemData = await Item.create({...req.body})
            res.status(200).json(itemData)
        }catch(err){
            res.status(400).json({message:'There was a problem with your POST request. (Item)', err})
        }
    })
//PUT one item by id
    router.put()

    module.exports = router
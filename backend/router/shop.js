const express = require('express');
const router = express.Router()
const {Shop} = require('../model/shop')


router.post('/create-data' , async(req ,res) => {

    const data = await Shop({
        id: req.body.id,
    })

    await data.save()
    res.send('Malumot saqlandi')
})

router.get('/get-data' , async(req ,res) => {
    const getShop = await Shop.find()
    .populate('topProduct')
    res.send(getShop)
})


module.exports = router
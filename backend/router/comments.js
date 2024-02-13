const express = require('express');
const router = express.Router();
const {Comment} = require('../model/comment');
router.post('/create-data', async(req, res) => {

    try {
        if(!req.body.image) return res.status(400).send('malumot toliq emas')
        if(!req.body.name) return res.status(400).send('malumot toliq emas')
        if(!req.body.surname) return res.status(400).send('malumot toliq emas')
        if(!req.body.comment) return res.status(400).send('malumot toliq emas')
        if(!req.body.rate) return res.status(400).send('malumot toliq emas')
    
        const saveComent = new Comment({
            name: req.body.name,
            surname: req.body.surname,
            image: req.body.image,
            comment: req.body.comment,
            rate: req.body.rate
        })
    
        await saveComent.save()
        res.json({
            message: "Ma'lumot qo'shildi",
            status: true,
            date: saveComent.date
        })

    }catch(err) {
        res.status(503).json({
            massage: "Serverda kutilmaga xato iltmos ma'lumotni tekshirib ko'ring!!" ,err,
            status: false
        })
    }
})

router.get('/get-data', async(req, res) => {
    const getData = await Comment.find()
    res.send(getData)
})


router.post('/delete-data' , async (req , res) => {
    const data = await Comment.deleteOne({_id: req.body.id})

    res.json({
        message: "Ma'lumot o'chirildi",
        status: true
    })
})
module.exports = router
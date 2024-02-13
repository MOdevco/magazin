const express = require('express');
const User = require('../router/users');
const Auth = require('../router/auth')
const Upload = require('../router/upload')
const File = require('../router/upload')
const Carusel = require('../router/carousels')
const TopProduct = require('../router/topProducts')
const Mouses = require('../router/mouses')
const Keyboards = require('../router/keyboards')
const Accessories = require('../router/accessories')
const Laptops = require('../router/laptops')
const VideoCards = require('../router/videocards')
const Monitors = require('../router/monitors')
<<<<<<< HEAD
const Work = require('../router/works')
const Workers = require('../router/workers')
const Comments = require('../router/comments')
=======
const News = require('../router/news')
>>>>>>> ef1f5ea13665a9a88e464891ccabb3f5c5c188e5
module.exports = function(app) {
    app.use(express.json())
    app.use('/api/auth/user', User)
    app.use('/api/auth' , Auth)
    app.use('/api/file' , Upload)
    app.use('/api/file' ,File)
    app.use('/api/carusel/image' , Carusel)
    app.use('/api/product' , TopProduct)
    app.use('/api/keyboard' , Keyboards)
    app.use('/api/mouses' , Mouses)
    app.use('/api/accessories' , Accessories)
    app.use('/api/laptops' , Laptops)
    app.use('/api/videoCards' , VideoCards)
    app.use('/api/monitors' , Monitors)
<<<<<<< HEAD
    app.use('/api/comments' , Monitors, Comments)
    app.use('/api' , Work)
    app.use('/api' , Workers)
=======
    app.use('/api/news' , News)
>>>>>>> ef1f5ea13665a9a88e464891ccabb3f5c5c188e5
}
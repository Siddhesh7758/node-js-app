//gives router
const router = require('express').Router()
const apiKeyMiddleware = require('../middlewares/apiKey')


router.get('/', (req,res) => {

    res.render('index', 
    //sets page title(heading)
    {
      title: 'My Homepage'
    })
  
})

router.get('/about', (req,res) => {

    res.render('about', 
    //sets page title(heading)
    {
      title: 'About Page'
    })
  
})

router.get('/download', (req,res) => {
    res.download(path.resolve(__dirname) + '/about.html')
})


// router.get('/api/products',apiKeyMiddleware, (req,res) => {
//     res.json([
//         {
//             id: '123',
//             name: 'chrome'
//         },
//         {
//             id: '1234',
//             name: 'firefox'
//         }
//     ])
// })


module.exports = router;
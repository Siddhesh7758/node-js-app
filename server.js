const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const mainRouter = require('./routes/index')  //importing navroute
const productRouter = require('./routes/products')   //product route


//using template engine ejs
app.set('view engine', 'ejs')


//use public assests
app.use(express.static('public'))

app.use(express.json())

//app.use(express.urlencoded({ extended: false }))

//using routes
app.use(mainRouter)
app.use(productRouter)

//listen to port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
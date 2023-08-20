
 const router = require('express').Router()


router.get('/helloscreen' , (req , res)=>{
 return res.send('hello')
})


router.use('/', require('./auth'))
module.exports  = router
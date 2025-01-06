const express = require('express')
const app = express()

app.get('/',(req,res,next)=>{
    res.send("helooo world")
})



module.exports=app
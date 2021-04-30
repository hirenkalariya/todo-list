const express = require('express')
const mongoose = require('mongoose');
const ejs =require ('ejs')

const userRouter=require('./routers/userRouter')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 8080

mongoose.connect('mongodb://localhost/userdata', {useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true})
.then(()=>
{
    console.log("database crete sucessfully !!!");
})
.catch((err)=>
{
    console.log(err);
})


app.set('view engine', 'ejs')



app.use(userRouter)
 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
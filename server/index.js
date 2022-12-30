var cors=require('cors')
const express= require('express')
const routes=require('./Router/Routes')
const app =express()

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',routes)

app.listen(3000)
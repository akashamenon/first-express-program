var express=require('express')
var bodyParser = require('body-parser')

let app=express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())



app.get('/',(req,res)=>{

    res.send("Welcome to my website")

})




app.post('/read', (req,res)=>{

    var getName=req.body.getName
    var getRoll=req.body.getRoll

    res.json({"name" :getName,"rollno":getRoll} )
})

app.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)

    var x=getNum1 + getNum2

    res.json({"sum":x})
})


app.listen(3000, ()=>{
    console.log("Server started at http://localhost:3000")
})
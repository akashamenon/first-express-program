var express=require('express')

let app=express()

app.get('/', (req,res)=>{

    res.send("Hello World")

}  )

app.get('/home', (req,res)=>{

    res.send("Welcome to my home page")

} )

app.listen(3000, ()=>{

    console.log("Server started at http://localhost:3000/home")
})
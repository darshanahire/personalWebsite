const express = require("express");
const path =require("path")
const app =express();
const hbs = require("hbs")

// requring database
require("./db/conn")
const User = require("./models/msg");
const { Mongoose } = require("mongoose");
// creating port 
const port=process.env.PORT || 8000;


const static_path=path.join(__dirname,"../public")

const templets_path=path.join(__dirname,"../templets/views")
const partials_path=path.join(__dirname,"../templets/partials")

// middleware
app.use(express.static(static_path))

// for convert data to json
app.use(express.urlencoded({extended:false}))
// setting mannual path to views
app.set("views",templets_path)
app.set("view engine","hbs")
hbs.registerPartials(partials_path)
  
app.get("/",(req,res)=>{
res.render("index");
})
app.post("/contact",async(req,res)=>{
try {
    // res.send(req.body)
    const Userdata =new User(req.body)
    await Userdata.save();
    res.status(201).render("contact")
    console.log("data added")
} catch (error) {
    res.status(500).send(error)
    
}
})

app.listen(port,()=>{
    console.log(`server running at port number ${port}`);
})
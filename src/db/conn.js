const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://personalWebsite:Mongoose@11@cluster0.vzhly.mongodb.net/test",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})
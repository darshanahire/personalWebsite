const mongoose = require("mongoose");
const uri = process.env.Mongo_URI;
mongoose.connect(uri||"mongodb://localhost:27017/personalWebsite",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
})
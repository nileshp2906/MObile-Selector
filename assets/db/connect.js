const mongoose = require("mongoose");
const uri = "mongodb+srv://nilesh2001:<Nilesh@123>@mobileselector.lnpqo5e.mongodb.net/MobileSelector?retryWrites=true&w=majority";
const connectDB = ()=>{
    console.log("connect");
    return mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology :true,
    });
};

module.exports = connectDB;
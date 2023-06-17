const mongoose = require("mongoose");

module.exports = connection = async () =>{
    try{
        mongoose.connect(`${process.env.DBURL}`)
        console.log("database is connected successfully !")
    }catch(err){
        console.log("error occures")
    }
}
let mongoose=require("mongoose")
let pmod=new mongoose.Schema({
    "_id":String,
    "title":String,
    "uid":String,
    "date":Date,
    "body":String,
    "cat":String,
    "name":String,
    "status":{
        type:Boolean,
        default:false
    }
})
let pm=mongoose.model("pmodel",pmod)
module.exports=pm
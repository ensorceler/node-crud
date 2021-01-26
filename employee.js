var mongoose = require('mongoose');

const Schema=mongoose.Schema;


const UserSchema= new Schema ({

        Name:{
        type:String, 
        required:true
    },
    Email:{

        type:String,
        required:true
    },
    Address:
    {

        type:String,
        required:true,
    },
    Phone:{

        type:String,
        required:true
    }

},{timestamps:true});


const Bruh=mongoose.model('bruh',UserSchema);

module.exports=Bruh;










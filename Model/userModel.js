const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    FristName:{
        type:String,
        required: [true, 'FirstName is Required']
    },
    LastName:{
        type:String,
        required:[true,'LastName is Required']
    },
    UserName:{
        type:String,
        required:[true,'UserName is required']
    },
    Email:{
        type:String,
        required:[true,'Email is required']
    },
    Password:{
        type:String,
        required:[true,'Password is reuired']
    },
    Modile:{
        type:String,
        required:[true,'Mobile is required'],
        unique:true,
    }}, {timestamps: true});

    const userModel = mongoose.model('User', userSchema);
module.exports = userModel

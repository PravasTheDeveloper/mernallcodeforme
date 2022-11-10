const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userallSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true
    },
    phone : {
        type:Number,
        required : true,
    },
    profession : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    cpassword : {
        type:String,
        required : true
    },
    data:{
        type:Date,
        default:Date.now
    },
    messeges:[
        {
            name : {
                type:String,
                required : true
            },
            email : {
                type:String,
                required : true
            },
            phone : {
                type:Number,
                required : true,
            },
            messege : {
                type:String
            }
        }
    ],
    tokens: [{
        token:{
            type:String,
            required : true
        }
    }]
});

//Hassing the Password

userallSchema.pre("save" , async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12);
        this.cpassword = await bcrypt.hash(this.cpassword , 12);
    }
    next();
});

//Generate Web Token

userallSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id} , process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
        // console.log(process.env.SECRET_KEY)
    }catch(err)
    {
        console.log(err);
    }
}

//Add messeges

userallSchema.methods.addMessege = async function(name , email , phone , messege){
    try{

        this.messeges = this.messeges.concat({name , email , phone , messege});
        await this.save();
        return this.messeges;

    }catch(err)
    {
        console.log(err);
    }
}

//WE NEED TO CREATE COLLECTION

const AllUser = new mongoose.model("User",userallSchema);

module.exports = AllUser;
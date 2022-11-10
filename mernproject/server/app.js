const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path : "./config.env"})
require("./db/conn");
const AllUser = require("./models/userSchema");
app.use(express.json());
app.use(require("./router/auth"));
const port = process.env.PORT;

app.get("/",(req , res) => {
    res.send("WELCOME TO HOME PAGE");
});

app.get("/signin",(req , res) => {
    res.send("WELCOME TO Signin PAGE");
});

// app.post("/register" , async(req , res) => {
//     // res.status(200).json({messege:"WORKING"});
//     const {name , email , phone , password , cpassword} = req.body;
//     if(!name || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error:"PLESE FILL ALL THE FEILD"});
//     }else{
//     try{
        
//         const UserExist = await AllUser.findOne({ email:email });
//         if(UserExist){
//             return res.status(422).json({error:"This Email Already Exist"});
//         }else{
//             if(password === cpassword){
//                 const registerEmployee = new AllUser({
//                 name,email,phone,password,cpassword
//                 });

//                 const registered = await registerEmployee.save();

//                 if(registered){
//                     res.status(200).json({messege:"Detail Saved"})
//                 }
//                 }else{
//                 res.status(401).json({error:"Your Password Is Not Same !"});
//             }
//         }
//     }catch(err){
//         res.status(400).json({error:`${err}`})
//         console.log(err);
//     }
    
// }
// })

app.listen(port , () => {
    console.log(`Your Server is Running on localhost:${port}`);
});
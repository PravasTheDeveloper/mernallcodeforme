const express = require("express");
const router = express.Router();
require('../db/conn');
const AllUser = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const cookeiParser = require("cookie-parser");
router.use(cookeiParser());

router.get("/" , (req , res) => {
    res.send("HELLO FORM ROUTER");  
});

//REGISTRATION ROUTER ===============================

router.post("/register" , async(req , res) => {
    // res.status(200).json({messege:"WORKING"});
    const {name , email , phone , profession , password , cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error:"PLESE FILL ALL THE FEILD"});
    }else{
    try{
        
        const UserExist = await AllUser.findOne({ email:email });
        if(UserExist){
            return res.status(422).json({error:"This Email Already Exist"});
        }else{
            if(password === cpassword){
                const registerEmployee = new AllUser({
                name,email,phone,profession,password,cpassword
                });

                const registered = await registerEmployee.save();

                if(registered){
                    res.status(200).json({messege:"Detail Saved"})
                }
                }else{
                res.status(401).json({error:"Your Password Is Not Same !"});
            }
        }
    }catch(err){
        res.status(400).json({error:`${err}`})
        console.log(err);
    }
    
}
});

//LOGIN ROUTER ======================================

router.post("/signin" , async(req , res) => {
    const {email , password} = req.body;
    if(!email || !password){
        res.status(400).json({error:"Plese Fill All The Fill"});
    }else{
        try{
            const findEmail = await AllUser.findOne({email:email});

            if(findEmail){
                const isMatch = await bcrypt.compare(password , findEmail.password);
                const token = await findEmail.generateAuthToken();

                res.cookie("jwtoken" , token , {
                    expires : new Date(Date.now() + 25892000000)
                })

                    if(isMatch)
                    {
                        res.send("LOGIN SUCCESSFULL");
                    }else
                    {
                        res.status(400).json({error:"Invalid Login !"});
                    }
            }else{
                res.status(400).json({error:"Invalid Login !"});
            }

            
        }catch(error)
        {
            res.status(400).json({error:"Something Went Wrong"});
            console.log(error);
        }
    }    
});

router.get("/about", authenticate , (req , res) => {
    res.send(req.rootUser);
})

router.get("/getdata", authenticate , (req , res) => {
    console.log("Hello Data Us");
    res.send(req.rootUser);
})

router.post("/contact", authenticate , async (req , res) => {
    try{
       const {name , email , phone , messege} = req.body;

       if(!name || !email || !messege || !phone){
           console.log("Error in contact form");
       }else{
           const userContact = await AllUser.findOne({_id:req.userId});

           if(userContact){
               const userMessege = await userContact.addMessege(name , email , phone , messege);
               await userContact.save();

               if(userMessege)
               {
                   res.status(200).json("messege Sent");
                   console.log(userMessege);
               }
           }
        // console.log(userContact);
       }
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
// ++++++++++++Import Bootstrap in react app.js+++++++++++++++

// import 'bootstrap/dist/css/bootstrap.css';

//++++++++++++Import Bootstrap in react Index.js+++++++++++++++

//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

//++++++++++++Import Fontawesome in Index.js+++++++++++++++

//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    




//=============NPM CODES===============

//npm install --save--dev node-sass

//==============Install Nodemon=========

//npm install nodemon -g

//==============The UseEffect for secrect path=========
//#########This Code Use in React Feild##########

// const callAboutPage = async() =>{
//     try{
//         const res = await fetch("/about" , {
//             method:"GET",
//             headers:{
//                 Accept : "application/json",
//                 "Content-type":"application/json"
//             },
//             credentials:"include"
//         });

//         const data = await res.json();
//         console.log(data);

//         if(!res.status === 200){
//             const error = new Error(res.error);
//             throw error;
//         }
//     }catch(err){
//         console.log(err);
//         history.push("/login");
//     }
// }

// useEffect(() => {

//     callAboutPage();
// });

//=================Hassing the Password=============
//#########This Code Will Use in Nodejs Feild##########


// userallSchema.pre("save" , async function(next) {
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password , 12);
//         this.cpassword = await bcrypt.hash(this.cpassword , 12);
//     }
//     next();
// });

//=======================Generate Web Token================
//#########This Code Will Use in Nodejs Feild##########


// userallSchema.methods.generateAuthToken = async function(){
//     try{
//         let token = jwt.sign({_id:this._id} , process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }catch(err)
//     {
//         console.log(err);
//     }
// }

//=======================Main Register Feild================
//#########This Code Will Use in Nodejs Feild##########


// router.post("/register" , async(req , res) => {
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
// });


//===================Main Login Feild================
//#########This Code Will Use in Nodejs Feild##########


// router.post("/signin" , async(req , res) => {
//     const {email , password} = req.body;
//     if(!email || !password){
//         res.status(400).json({error:"Plese Fill All The Fill"});
//     }else{
//         try{
//             const findEmail = await AllUser.findOne({email:email});

//             if(findEmail){
//                 const isMatch = await bcrypt.compare(password , findEmail.password);
//                 const token = await findEmail.generateAuthToken();

//                 res.cookie("jwtoken" , token , {
//                     expires : new Date(Date.now() + 25892000000)
//                 })

//                     if(isMatch)
//                     {
//                         res.send("LOGIN SUCCESSFULL");
//                     }else
//                     {
//                         res.status(400).json({error:"Invalid Login !"});
//                     }
//             }else{
//                 res.status(400).json({error:"Invalid Login !"});
//             }

            
//         }catch(error)
//         {
//             res.status(400).json({error:"Something Went Wrong"});
//             console.log(error);
//         }
//     }    
// });

//===================The Authentication Feild for any Token verify================
//#########This Code Will Use in Nodejs Feild##########

// const jwt = require("jsonwebtoken");
// const AllUser = require("../models/userSchema");

// const authenticate = async (req , res , next) => {
//     try{

//         const token = req.cookies.jwtoken;
//         const verifyToken = jwt.verify(token , process.env.SECRET_KEY);

//         const rootUser = await AllUser.findOne({_id:verifyToken._id , "tokens.token":token});

//         if(!rootUser){
//             throw new Error("User Not Found");
//         }

//         req.token = token;
//         req.rootUser = rootUser;
//         req.userId = rootUser._id;

//         next();


//     }catch(err){
//         res.status(401).send("No thoken provided");
//         console.log(err);
//     }
// }

// module.exports = authenticate;


// Some Redux Code

// Find all In The Flipkart Project
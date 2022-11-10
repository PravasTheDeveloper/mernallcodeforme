import React, { useState } from 'react';
import { NavLink , useHistory } from 'react-router-dom';
import SignupFrom from '../images/SignupFrom.png';

function SignUp() {

    const history = useHistory();

    const [user, setuser] = useState({
        name : "",
        email: "",
        phone: "",
        profession:"",
        password:"",
        cpassword:""
    });

    let name , value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({...user , [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name , email , phone , profession , password , cpassword} = user;

        const res = await fetch("/register" , {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name , email , phone , profession , password , cpassword
            })
        });

        const data = await res.json();

        console.log(data.status);
        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
        }else{
            window.alert("Registration Successful");
            history.push("/login");
        }
    }

    return (
        <>
            <div className="signup__page__wrapper">
                <div className="signup__page">
                <h1>SignUp Page</h1>
                    <div className="signup__container">
                        <div className="signup__from">
                            <form className="registration__from" method="POST">
                                <div className="registration__AllInput YourName">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <input name="name" className="name" placeholder="Enter Your Name" value={user.name} onChange={handleInput} />
                                </div>


                                <div className="registration__AllInput YourEmail">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-envelope-open"></i>
                                    </div>
                                    <input name="email" className="email" placeholder="Enter Your Email" value={user.email} onChange={handleInput} />
                                </div>


                                <div className="registration__AllInput YourNumber">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <input name="phone" className="phone" placeholder="Enter Your Number" value={user.phone} onChange={handleInput} />
                                </div>


                                <div className="registration__AllInput YourProfession">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-briefcase"></i>
                                    </div>
                                    <input name="profession" className="profession" placeholder="Enter Your Profession" value={user.profession} onChange={handleInput} />
                                </div>


                                <div className="registration__AllInput YourPassword">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <input name="password" className="password" placeholder="Enter Your Password" value={user.password} onChange={handleInput} />
                                </div>


                                <div className="registration__AllInput YourCPassword">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-lock-open"></i>
                                    </div>
                                    <input name="cpassword" className="cpassword" placeholder="Confirm Your Password" value={user.cpassword} onChange={handleInput} autoComplete="off" />
                                </div>


                                <div className="singup__button">
                                    <button className="btn btn-success" onClick={PostData}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="signup__image">
                            <div className="signup__image__innerItems">
                                <img src={SignupFrom} alt="Sign Up" />
                                <NavLink exact to="/login" className="signup__image__link text-success">Already Registred</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp

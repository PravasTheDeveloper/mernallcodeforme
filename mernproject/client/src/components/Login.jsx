import React, { useState } from 'react';
import LoginFrom from '../images/LoginForm.png';
import { NavLink , useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin" , {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email ,password
            })

        })

        const data = res.status;

        if(data === 400 || !data)
        {
            window.alert("Login Invalid");
        }else{
            window.alert("Login Successfull");
            history.push("/");
        }
    }

    return (
        <>
            <div className="signup__page__wrapper">
                <div className="signup__page">
                <h1>LogIn Page</h1>
                    <div className="signup__container">
                        <div className="signup__from">
                            <form method="POST" className="login__from">
                                


                                <div className="registration__AllInput YourEmail">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-envelope-open"></i>
                                    </div>
                                    <input name="email" className="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email" />
                                </div>


                                

                                <div className="registration__AllInput YourPassword">
                                    <div className="registration__AllInput__icons">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <input name="password" className="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Your Password" />
                                </div>


                               


                                <div className="singup__button">
                                    <button className="btn btn-info" onClick={loginUser}>Log In</button>
                                </div>
                            </form>
                        </div>
                        <div className="login__image">
                            <div className="login__image__innerItems">
                                <img src={LoginFrom} alt="Sign Up" /><br />
                                <NavLink exact to="/signup" className="signup__image__link text-success">Create a Account</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}

export default Login

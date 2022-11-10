import React from 'react';
import { NavLink } from 'react-router-dom';
import ErrorImg from '../images/404Error.jpg';

function ErrorPage() {
    return (
        <>
            <div className="ErrorPage__wrapper">
                <div className="ErrorPage__Content">
                    <img src={ErrorImg} />
                    <NavLink exact to="/" className="btn btn-info mt-5 text-light">GO TO HOME</NavLink>
                </div>
            </div>   
        </>
    )   
}

export default ErrorPage

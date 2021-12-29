import React from "react";
import './SignIn.css'
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className='signIn'>
                <div className='email'>
                    <label className="">Email Address</label>
                    <div className="inputEmail">
                        <input type="email" className="signInput" placeholder="name@yourdomain.com"/>
                    </div>
                </div>
                <div className='password'>
                    <label className="">Password</label>
                    <div className="inputPassword">
                        <input type="password" className="signInput" placeholder="Enter your password"/>
                    </div>
                </div>
                <button className="signButton">
                    Sign in
                </button>
            <p className="text-center">
                <small className="registerСhoose">
                    Don't have an account yet? <Link to="/signUp">Sign up</Link>.
                </small>
            </p>
        </div>
    )
}

export default SignIn
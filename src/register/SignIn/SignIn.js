import React from "react";
import './SignIn.css'

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
        </div>
    )
}

export default SignIn
import React from "react";
import './SignIn.css'
import {Link} from "react-router-dom";

const SignIn = ({signInReduce,dispatchSignIn}) => {

    const register = (e)=>{
        dispatchSignIn({
            payload:{
                name:e.target.name,
                value:e.target.value
            }
        })
    }

    return (
        <div className='signIn'>
            <h1>Войти</h1>
                <div className='email'>
                    <label className="">Email Address</label>
                    <div className="inputEmail">
                        <input
                            onChange={(e)=>{
                                register(e)
                            }}
                            name='youEmail'
                            type="email"
                            className="signInput"
                            placeholder="name@yourdomain.com"/>
                    </div>
                </div>
                <div className='password'>
                    <label className="">Password</label>
                    <div className="inputPassword">
                        <input
                            onChange={(e)=>{
                                register(e)
                            }}
                            name='youPassword'
                            type="password"
                            className="signInput"
                            placeholder="Enter your password"/>
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
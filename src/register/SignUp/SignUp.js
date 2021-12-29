import React from "react";
import './SignUp.css'
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className='signUp'>
            <div className='name'>
                <label className="">Your Name</label>
                <div className="inputName inputTop">
                    <input type="name" className="signInput" placeholder="Введите ваше имя"/>
                </div>
            </div>
            <div className='email'>
                <label className="">Email Address</label>
                <div className="inputEmail inputTop">
                    <input type="email" className="signInput" placeholder="name@yourdomain.com"/>
                </div>
            </div>
            <div className='password'>
                <label className="">Password</label>
                <div className="inputPassword inputTop">
                    <input type="password" className="signInput" placeholder="Введите ваш пароль"/>
                </div>
            </div>
            <button className="signButton">
                Sign up
            </button>
            <p className="text-center">
                <small className="registerСhoose">
                    Already have an account? <Link to="/signIn">Login in</Link>.
                </small>
            </p>
        </div>
    )
}

export default SignUp
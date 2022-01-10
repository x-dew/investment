import React, {useReducer} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Img from './../imgInvestvent/logoRegister.png'
import SignIn from "./SignIn/SignIn";
import './register.css'
import SignUp from "./SignUp/SignUp";
import {signUpData, signInData,reduce} from "./reduce/reduce";
import RegisterName from "./registerName/registerName";
import Logo from "../imgInvestvent/logo.png";
import Invest from "../imgInvestvent/invest.png";


const Register = ({color,lightColor,darkColor,setColor,Child}) => {


    return (
        <div className='registerUser'>
            <div className='logotype'>
                <div className='logo'>
                    <img className='imgLogo' src={Logo} alt=""/>
                    <img className='imgLogoInvest' src={Invest} alt=""/>
                </div>
                <svg onClick={() => {
                    color === 0 ? setColor(1) : setColor(0)
                }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill={color === 0 ? darkColor : lightColor}
                     className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                    <path
                        fill="#fffff"
                        d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg>
            </div>
            <div className='register'>
                <img className='registerImg' src={Img} alt=""/>
                <div className={color === 0 ? 'registerData' : 'registerData registerDataColor'}>
                </div>
            </div>
        </div>

    )
}

export default Register
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Img from './../imgInvestvent/logoRegister.png'
import SignIn from "./SignIn/SignIn";
import './register.css'
import SignUp from "./SignUp/SignUp";

const Register = ({color}) => {

    return (
        <div className='register'>
            <img className='registerImg' src={Img} alt=""/>
            <div className={color === 0 ? 'registerData' : 'registerData registerDataColor'}>
                <h1>Войти</h1>
                <form>
                    <Routes>
                        <Route path="signIn" element={<SignIn />} />
                        <Route path="signUp" element={<SignUp />} />
                    </Routes>
                </form>
            </div>
        </div>
    )
}

export default Register
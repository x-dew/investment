import React, {useReducer} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Img from './../imgInvestvent/logoRegister.png'
import SignIn from "./SignIn/SignIn";
import './register.css'
import SignUp from "./SignUp/SignUp";
import {signUpData, signInData, signUpDataPhone,reduce} from "./reduce/reduce";
import RegisterName from "./registerName/registerName";


const Register = ({color}) => {

    const [signUpReduce, dispatchSignUp] = useReducer(reduce, signUpData)
    const [signInReduce, dispatchSignIn] = useReducer(reduce, signInData)


    return (
        <div className='register'>
            <img className='registerImg' src={Img} alt=""/>
            <div className={color === 0 ? 'registerData' : 'registerData registerDataColor'}>
                <Routes>
                    <Route path="/"
                           element={<SignIn
                               signInReduce={signInReduce}
                               dispatchSignIn={dispatchSignIn}
                           />}/>
                    <Route path="register"
                           element={<SignUp
                               signUpReduce={signUpReduce}
                               dispatchSignUp={dispatchSignUp}/>}/>
                    <Route path="/register/registerPhone"
                           element={<RegisterName
                               signUpReduce={signUpReduce}
                               dispatchSignUp={dispatchSignUp}
                           />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default Register
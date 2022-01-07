import React, {useReducer} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Img from './../imgInvestvent/logoRegister.png'
import SignIn from "./SignIn/SignIn";
import './register.css'
import SignUp from "./SignUp/SignUp";
import {signUpData, signInData,reduce} from "./reduce/reduce";
import RegisterName from "./registerName/registerName";


const Register = ({color}) => {

    const [signUpReduce, dispatchSignUp] = useReducer(reduce, signUpData)
    const [authorization,dispatchAuthorization] = useReducer(reduce,signInData)


    return (
        <div className='register'>
            <img className='registerImg' src={Img} alt=""/>
            <div className={color === 0 ? 'registerData' : 'registerData registerDataColor'}>
                <Routes>
                    <Route path="/"
                           element={<SignIn
                               authorization={authorization}
                               dispatchAuthorization={dispatchAuthorization}
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
import React, {useReducer} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Img from './../imgInvestvent/logoRegister.png'
import SignIn from "./SignIn/SignIn";
import './register.css'
import SignUp from "./SignUp/SignUp";
import {signUp, signIn, reduce} from "./reduce/reduce";



const Register = ({color}) => {

    const [signUpReduce, dispatchSignUp] = useReducer(reduce, signUp)
    const [signInReduce,dispatchSignIn] = useReducer(reduce,signIn)



    return (
        <div className='register'>
            <img className='registerImg' src={Img} alt=""/>
            <div className={color === 0 ? 'registerData' : 'registerData registerDataColor'}>
                <form>
                    <Routes>
                        <Route path="/" element={<SignIn
                            signInReduce={signInReduce}
                            dispatchSignIn={dispatchSignIn}
                        />}/>
                        <Route path="signUp" element={<SignUp
                            signUpReduce={signUpReduce}
                            dispatchSignUp={dispatchSignUp}/>}/>
                    </Routes>
                </form>
            </div>
        </div>
    )
}

export default Register
import './App.css';
import Register from "./register/register";
import {Routes, Route, Link} from "react-router-dom";

import {useState, useReducer} from "react";
import React from "react";
import Profile from "./profile/profile";
import SignIn from "./register/SignIn/SignIn";
import SignUp from "./register/SignUp/SignUp";
import RegisterName from "./register/registerName/registerName";
import {reduce, signInData, signUpData} from "./register/reduce/reduce";


function App() {

    const darkColor = '#131722'
    const lightColor = '#fff'

    const [signUpReduce, dispatchSignUp] = useReducer(reduce, signUpData)
    const [authorization, dispatchAuthorization] = useReducer(reduce, signInData)

    const [color, setColor] = useState(0)

    return (
        <div className="App" style={color === 0 ? {background: lightColor} : {background: darkColor}}>
            <Routes>
                <Route path="login"
                       element={
                    <SignIn
                           authorization={authorization}
                           dispatchAuthorization={dispatchAuthorization}
                       />
                }
                />
                <Route path="register"
                       element={
                    <SignUp
                           signUpReduce={signUpReduce}
                           dispatchSignUp={dispatchSignUp}
                    />
                }
                />
                <Route path="registerPhone"
                       element={
                    <RegisterName
                           signUpReduce={signUpReduce}
                           dispatchSignUp={dispatchSignUp}
                       />
                }
                />
                <Route
                    path='/'
                    element={
                    <Profile
                        signUpReduce={signUpReduce}
                    />
                }
                />
            </Routes>
        </div>
    );
}

export default App;


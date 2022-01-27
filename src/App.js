import './App.css';
import Register from "./register/register";
import {Routes, Route, Link, Switch, BrowserRouter} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useState, useReducer, useEffect,} from "react";
import React from "react";
import Profile from "./profile/profile";
import SignIn from "./register/SignIn/SignIn";
import SignUp from "./register/SignUp/SignUp";
import RegisterName from "./register/registerName/registerName";
import {reduce, signInData, signUpData, profilesInvest,} from "./register/reduce/reduce";


function App() {

    const darkColor = '#131722'
    const lightColor = '#fff'

    const [signUpReduce, dispatchSignUp] = useReducer(reduce, signUpData)
    const [authorization, dispatchAuthorization] = useReducer(reduce, signInData)

    const [color, setColor] = useState(0)
    const [profile, setProfile] = useState('')

    let history = useHistory();

    {
        if (localStorage.getItem('access_token') === null) {
            history.push("/login")
            console.log('history')
        }
    }

    return (
        <div className="App" style={color === 0 ? {background: lightColor} : {background: darkColor}}>
            <Routes>
                <Route path="login"
                       element={
                           <SignIn
                               profile={profile}
                               setProfile={setProfile}
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
                    path="/"
                    element={
                        <Profile
                            setProfile={setProfile}
                            signUpReduce={signUpReduce}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;


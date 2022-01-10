import React, {useState} from "react";
import './SignIn.css'
import axios from "axios";
import {Link} from "react-router-dom";
import AuthWrap from "../../components/wrappers/AuthWrap";

const SignIn = ({authorization, dispatchAuthorization}) => {

    const register = (e) => {
        dispatchAuthorization({
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const [profile,setProfile] = useState('/login')
    const authorizationDate = () => {
        axios.post('https://api.investonline.su/api/v1/clients/web/login', {
            email: authorization.email,
            password: authorization.password
        }).then((resp) => {
            setProfile('/')
            console.log(resp)})
            .catch((error) => {
            console.log(error)
        })
    }




    return (
        <AuthWrap>
            <div className='signIn'>
                <h1>Войти</h1>
                <div className='email'>
                    <label className="">Email Address</label>
                    <div className="inputEmail">
                        <input
                            onChange={(e) => {
                                register(e)
                            }}
                            name='email'
                            type="email"
                            className="signInput"
                            placeholder="name@yourdomain.com"/>
                    </div>
                </div>
                <div className='password'>
                    <label className="">Password</label>
                    <div className="inputPassword">
                        <input
                            onChange={(e) => {
                                register(e)
                            }}
                            name='password'
                            type="password"
                            className="signInput"
                            placeholder="Enter your password"/>
                    </div>
                </div>
                <button
                    onClick={() => [authorizationDate()]}
                    className="signButton">
                    <Link to={profile}> Sign in</Link>

                </button>
                <p className="text-center">
                    <small className="registerСhoose">
                        Don't have an account yet? <Link to="/register">Sign up</Link>.
                    </small>
                </p>
            </div>
        </AuthWrap>
    )
}

export default SignIn
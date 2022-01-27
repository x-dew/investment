import React, {useReducer, useState} from "react";
import './SignIn.css'
import axios from "axios";
import {Link} from "react-router-dom";
import AuthWrap from "../../components/wrappers/AuthWrap";

const SignIn = ({authorization, dispatchAuthorization, setProfile, profile}) => {

    const [errorBlock, setErrorBlock] = useState(0)

    const register = (e) => {
        dispatchAuthorization({
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const authorizationDate = () => {
        axios.post('https://api.investonline.su/api/v1/clients/web/login', {
            email: authorization.email,
            password: authorization.password
        }).then((resp) => {
            localStorage.setItem('access_token', resp.data.access_token)
            localStorage.setItem('expires_in', resp.data.expires_in)
            localStorage.setItem('refresh_token', resp.data.refresh_token)
            setProfile('/')
        }).catch((error) => {
            setErrorBlock(1)
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
                            value={authorization.email}
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
                            value={authorization.password}
                            className="signInput"
                            placeholder="Enter your password"/>
                    </div>
                </div>
                {errorBlock === 1 ? <div className='errorBlock'>
                    <p>Поля не заполненны, или неправельно введенно пароль или логин</p>
                </div> : ''}
                <button
                    onClick={() => {
                        if(authorization.email === '' || authorization.password === ''){
                            setErrorBlock(1)
                            setProfile('')
                        }else {
                            authorizationDate()
                        }

                    }}
                    className="signButton">
                    <Link to={profile}>Sign In </Link>
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
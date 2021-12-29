import React from "react";
import Img from './../imgInvestvent/logoRegister.png'
import SignIn from "./SignIn/SignIn";
import './register.css'

const Register = ({color}) => {

    return (
        <div className='register'>
            <img className='registerImg' src={Img} alt=""/>
            <div className={color === 0 ? 'registerData' : 'registerData registerDataColor'}>
                <h1>Войти</h1>
                <form>
                    <SignIn/>
                    <p className="text-center">
                        <small className="registerСhoose">
                            Don't have an account yet? <a href="#">Sign up</a>.
                        </small>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default Register
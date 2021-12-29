import React from "react";
import Img from './../imgInvestvent/logoRegister.png'
import SignIn from "./SignIn/SignIn";
import './register.css'

const Register = () => {
    return (
        <div className='register'>
            <img src={Img} alt=""/>
            <div className='registerData'>
                <h1>Войти</h1>
                <p>Бесплатный доступ к нашей панели управления.</p>
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
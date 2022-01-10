import React, {useState} from 'react';
import Logo from "../../../imgInvestvent/logo.png";
import Invest from "../../../imgInvestvent/invest.png";
import Img from "../../../imgInvestvent/logoRegister.png";
import './index.css'

const AuthWrap = ({children}) => {

    return (
        <div className='registerUser'>
            <div className='logotype'>
                <div className='logo'>
                    <img className='imgLogo' src={Logo} alt=""/>
                    <img className='imgLogoInvest' src={Invest} alt=""/>
                </div>
            </div>
            <div className='register'>
                <img className='registerImg' src={Img} alt=""/>
                <div className='registerData'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthWrap;
import React, {useEffect, useState} from "react";
import './SignUp.css'
import {Link} from "react-router-dom";
import axios from "axios";


const SignUp = ({dispatchSignUp, signUpReduce}) => {
    const register = (e) => {
        dispatchSignUp({
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    const [checkbox, setCheckbox] = useState(false)
    const [chooseCategory, setChooseCategory] = useState('')
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [checkCode, setCheckCode] = useState(null)

    const confirm = () => {
        if (checkbox === false) {
            setCheckbox(true)

        } else {
            setCheckbox(false)
        }
    }

    const inputPassword = () => {
        axios.post('https://api.investonline.su/api/v1/confirmations/send/email', {
            email: signUpReduce.email,
            type: 'register_request'
        }).then((response) => {
                console.log(response)
            }
        ).catch((error) => {
            console.log(error);
        });
    }


    const confirmFun = (e) => {
        axios.post('https://api.investonline.su/api/v1/confirmations/check/email', {
            email: signUpReduce.email,
            code: e.target.value,
            type: 'register_request'
        }).then((response) => {
                setConfirmPassword(null)
                setCheckCode(1)
                console.log(response)
            }
        ).catch((error) => {
            console.log(error);
        });

    }


    return (
        <div className='signUp'>
            <h1>Зарегистрироваться</h1>
            <div className='chooseCategory'>
                <button
                    name='role'
                    style={chooseCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                    type='submit'
                    onClick={(e) => {
                        setChooseCategory('investor')
                        dispatchSignUp({
                            payload:{
                                name:e.target.name,
                                value: 'investor'
                            }
                        })
                    }}
                    className={`chooseBtn ${chooseCategory === 'investor' ? 'chooseBtnAction' : ''} chooseInvestor`}
                >
                    Инвестор
                </button>
                <button
                    name='role'
                    style={chooseCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                    onClick={(e) => {
                        setChooseCategory('borrower')
                        dispatchSignUp({
                            payload:{
                                name:e.target.name,
                                value: 'borrower'
                            }
                        })
                    }}
                    className={`chooseBtn ${chooseCategory === 'borrower' ? 'chooseBtnAction' : ''} chooseBorrower`}
                >
                    заемщик
                </button>
            </div>
            <div className='email'>
                <label className="">Email</label>
                <div className="inputEmail inputTop">
                    <input
                        disabled={chooseCategory === ''}
                        onChange={(e) => {
                            register(e)
                            console.log(signUpReduce)
                        }}
                        name='email'
                        type="email"
                        className="signInput signInputEmail"
                        placeholder="name@yourdomain.com"/>
                    {checkCode === null ? <button
                            disabled={!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(signUpReduce.email)}
                            onClick={() => {
                                inputPassword()
                                setConfirmPassword(1)
                            }}
                            className='inputEmailBtn'>Подтвердить
                        </button> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0d1bf5"
                             className="bi bi-check-lg" viewBox="0 0 16 16">
                            <path
                                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    }

                </div>
            </div>
            <div
                style={confirmPassword === null ? {display: 'none'} : {display: 'block'}}
                className='confirmPassword'>
                <label className="">Код потверждения</label>
                <div className="inputPassword inputTop">
                    <input
                        onChange={(e) => {
                            register(e)
                            if (e.target.value.length === 4 || /^[+-]?\d+$/.test(e.target.value)) {
                                confirmFun(e)
                            }

                        }}
                        name='email_code'
                        type="text"
                        className="signInput"
                        placeholder="Подтвердить пароль"/>
                </div>
            </div>
            <div className='password'>
                <label className="">Пароль</label>
                <div className={checkCode === null ? 'inputPasswordDisabled inputTop' : "inputPassword inputTop"}>
                    <input
                        disabled={checkCode === null}
                        onChange={(e) => {
                            if (/(?=.*?["a-zA-Z-0-9])/.test(e.nativeEvent.data)) {
                                register(e)
                            }
                        }}
                        value={signUpReduce.password}
                        name='password'
                        type="password"
                        className="signInput"
                        placeholder="Введите ваш пароль"/>
                </div>
            </div>
            {
                checkCode === 1 ?
                    <div className='availableSymbols'>
                        <div className='separationSymbol'>
                            <div className='symbols'>
                                <div
                                    className={/(?=.*?[A-Z])/.test(signUpReduce.password) === true ? 'availableSymbolsRight' : 'availableSymbolsError'}></div>
                                <p>одна прописная буква</p>
                            </div>
                            <div className='symbols'>
                                <div
                                    className={/(?=.*?[a-z])/.test(signUpReduce.password) === true ? 'availableSymbolsRight' : 'availableSymbolsError'}></div>
                                <p>одна строчная буква</p>
                            </div>
                        </div>
                        <div className='separationSymbol'>
                            <div className='symbols'>
                                <div
                                    className={/.{8,}/.test(signUpReduce.password) === true ? 'availableSymbolsRight' : 'availableSymbolsError'}></div>
                                <p>не менее 8 символов</p>
                            </div>
                            <div className='symbols'>
                                <div
                                    className={/(?=.*?[0-9])/.test(signUpReduce.password) === true ? 'availableSymbolsRight' : 'availableSymbolsError'}></div>
                                <p>одна цифра</p>
                            </div>
                        </div>

                    </div> : ''
            }
            <div className='registerAgreement'>
                <input
                    disabled={signUpReduce.password.length < 8}
                    onClick={confirm}
                    type="checkbox"/>
                <label htmlFor="1">Я согласен с <a href="#">Политикой обработки персональных данных</a> и даю
                    <span>Согласие на обработку своих персональных данных</span></label>
            </div>
            <button
                disabled={checkbox === false}
                className="signButton"
            >
                <Link className="signButtonLink" to="registerPhone">Продолжить</Link>

            </button>
            <p className="text-center">
                <span className="registerСhoose">
                    Already have an account? <Link to="registerPhone">Login in</Link>.
                </span>
            </p>
        </div>
    )
}

export default SignUp
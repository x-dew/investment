import React, {useState} from "react";
import './registerName.css'
import {Link} from "react-router-dom";
import axios from "axios";
import MaskedInput from 'react-text-mask'


const RegisterName = ({dispatchSignUp, signUpReduce}) => {

    const [faceCategory, setFaceCategory] = useState('')
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [checkCode, setCheckCode] = useState(null)


    const phoneCodePost = () => {
        axios.post('https://api.investonline.su/api/v1/confirmations/send/phone', {
            phone: signUpReduce.phone,
            type: "register_request"
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
        })
    }


    const phoneCodeGet = (e) => {
        axios.post('https://api.investonline.su/api/v1/confirmations/check/phone', {
            phone: signUpReduce.phone,
            code: e.target.value,
            type: "register_request"
        }).then((response) => {
            setConfirmPassword(null)
            setCheckCode(1)
        }).catch((error) => {
        })
    }


    const registrationData = () => {
        axios.post('https://api.investonline.su/api/v1/register/with-profile', {
            email: signUpReduce.email,
            email_code: signUpReduce.email_code,
            phone: signUpReduce.phone,
            phone_code: signUpReduce.phone_code,
            role: signUpReduce.role,
            legal_form_type: signUpReduce.legal_form_type,
            password: signUpReduce.password,
            confidentiality_acceptance: true,
            fio: signUpReduce.fio,
            without_patronymic: false
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
        })
    }

    const register = (e) => {
        dispatchSignUp({
            payload: {
                name: e.target.name,
                value: e.target.value.replace(/(^|\s)\S/g, function (a) {
                    return a.toUpperCase()
                })
            }
        })
    }


    return (
        <div className="registerName">
            <h1>Зарегистрироваться</h1>
            <div className='registerFace'>
                <button
                    name='legal_form_type'
                    style={faceCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                    type='submit'
                    onClick={(e) => {
                        setFaceCategory('indiv')
                        dispatchSignUp({
                            payload: {
                                name: e.target.name,
                                value: 'indiv'
                            }
                        })
                    }}
                    className={`chooseBtn ${faceCategory === 'indiv' ? 'chooseBtnAction' : ''} chooseInvestor`}
                >
                    Юр.лицо
                </button>
                {
                    signUpReduce.role === 'investor' ? <button
                        name='legal_form_type'
                        style={faceCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                        onClick={(e) => {
                            setFaceCategory('entity')
                            dispatchSignUp({
                                payload: {
                                    name: e.target.name,
                                    value: 'entity'
                                }
                            })
                        }}
                        className={`chooseBtn ${faceCategory === 'entity' ? 'chooseBtnAction' : ''} choosePhysicalPerson`}
                    >
                        Физ.лицо
                    </button> : ''
                }

                <button
                    name='legal_form_type'
                    style={faceCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                    onClick={(e) => {
                        setFaceCategory('ie')
                        dispatchSignUp({
                            payload: {
                                name: e.target.name,
                                value: 'ie'
                            }
                        })
                    }}
                    className={`chooseBtn ${faceCategory === 'ie' ? 'chooseBtnAction' : ''} chooseBorrower`}
                >
                    ИП
                </button>
            </div>
            <div className='registerPhone'>
                <div className='email'>
                    <label className="">Телефон</label>
                    <div className="inputEmail inputTop">
                        <MaskedInput
                            disabled={faceCategory === ''}
                            mask={['+', (7), '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                            className="signInput signInputEmail form-control"
                            name='phone'
                            placeholder="+7 (999) 999-99-99"
                            guide={false}
                            value={signUpReduce.phone}
                            id="my-input-id"
                            onBlur={() => {
                            }}
                            onChange={(e) => {
                                register(e)
                            }}
                        />
                        {checkCode === null ? <button
                                disabled={!/^\+?[78][-\(]?\d{3}\)? ?\d{3}-?\d{2}-?\d{2}$/i.test(signUpReduce.phone)}
                                onClick={() => {
                                    phoneCodePost()
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
                                    phoneCodeGet(e)
                                }
                            }}
                            name='phone_code'
                            type="text"
                            className="signInput "
                            placeholder="Подтвердить пароль"/>
                    </div>
                </div>
                <div className='password'>
                    <label className="">ФИО</label>
                    <div className={checkCode === null ? 'inputPasswordDisabled inputTop' : "inputPassword inputTop"}>
                        <input
                            disabled={signUpReduce.phone_code === ''}
                            onChange={(e) => {
                                register(e)
                            }}
                            value={signUpReduce.fio}
                            name='fio'
                            type="text"
                            className="signInput"
                            placeholder="Иванов Иван Иванович"
                        />
                    </div>
                </div>
                <button
                    disabled={signUpReduce.fio !== '' ? false : true}
                    className="signButton"
                    onClick={() => {
                        console.log(signUpReduce)
                        registrationData()
                    }}

                >
                    <Link className="signButtonLink" to="/">Создать аккаунт</Link>

                </button>
            </div>
        </div>
    )
}

export default RegisterName
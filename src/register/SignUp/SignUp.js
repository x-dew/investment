import React, {useState} from "react";
import './SignUp.css'
import {Link} from "react-router-dom";

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
    const [chooseCategory, setChooseCategory] = useState('invest')

    console.log(chooseCategory)

    return (
        <div className='signUp'>
            <h1>Зарегистрироваться</h1>
            <div className='chooseCategory'>
                <button
                    type='submit'
                    disabled={checkbox === false}
                    onClick={()=>{setChooseCategory('invest')}}
                    className={`chooseBtn ${chooseCategory === 'invest' ? 'chooseBtnAction': ''} chooseInvestor`}
                >Инвестор
                </button>
                <button
                    disabled={checkbox === false}
                    onClick={()=>{setChooseCategory('borrower')}}
                   className={`chooseBtn ${chooseCategory === 'borrower' ? 'chooseBtnAction': ''} chooseBorrower`}
                    >заемщик
                </button>
            </div>
            <div className='email'>
                <label className="">Email</label>
                <div className="inputEmail inputTop">
                    <input
                        disabled={checkbox === false}
                        onChange={(e) => {
                            register(e)
                        }}
                        name='youEmail'
                        type="email"
                        className="signInput signInputEmail"
                        placeholder="name@yourdomain.com"/>
                    <button
                        disabled={checkbox === false}
                        className='inputEmailBtn'>Подтвердить
                    </button>
                </div>
            </div>
            <div
                style={{display: 'none'}}
                className='confirmPassword'>
                <label className="">Пароль</label>
                <div className="inputPassword inputTop">
                    <input
                        onChange={(e) => {
                            register(e)
                        }}
                        name='confirmPassword'
                        type="password"
                        className="signInput"
                        placeholder="Подтвердить пароль"/>
                </div>
            </div>
            <div className='password'>
                <label className="">Пароль</label>
                <div className="inputPassword inputTop">
                    <input
                        disabled={checkbox === false}
                        onChange={(e) => {
                            register(e)
                        }}
                        name='youPassword'
                        type="password"
                        className="signInput"
                        placeholder="Введите ваш пароль"/>
                </div>
            </div>
            <div className='registerAgreement'>
                <input
                    onClick={() => {
                        checkbox === false ? setCheckbox(true) : setCheckbox(false)
                    }}
                    type="checkbox"/>
                <label htmlFor="1">Я согласен с <a href="#">Политикой обработки персональных данных</a> и даю
                    <span>Согласие на обработку своих персональных данных</span></label>
            </div>
            <button
                disabled={checkbox === false}
                className="signButton">
                Sign up
            </button>
            <p className="text-center">
                <small className="registerСhoose">
                    Already have an account? <Link to="/">Login in</Link>.
                </small>
            </p>
        </div>
    )
}

export default SignUp
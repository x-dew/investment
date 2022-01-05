import React, {useState} from "react";
import './registerName.css'

const RegisterName = ({dispatchSignUp, signUpReduce}) => {

    const [faceCategory, setFaceCategory] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [checkCode, setCheckCode] = useState(null)

    console.log(signUpReduce)

    const register = (e) => {
        dispatchSignUp({
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }


    return (
        <div className="registerName">
            <h1>Зарегистрироваться</h1>
            <div className='registerFace'>
                <button
                    style={faceCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                    type='submit'
                    onClick={() => {
                        setFaceCategory('Entity')
                    }}
                    className={`chooseBtn ${faceCategory === 'Entity' ? 'chooseBtnAction' : ''} chooseInvestor`}
                >
                    Юр.лицо
                </button>
                <button
                    style={faceCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                    onClick={() => {
                        setFaceCategory('Physical person')
                    }}
                    className={`chooseBtn ${faceCategory === 'Physical person' ? 'chooseBtnAction' : ''} chooseBorrower`}
                >
                    Физ.лицо
                </button>
                <button
                    style={faceCategory === '' ? {border: '1px solid red'} : {border: '1px solid white'}}
                    onClick={() => {
                        setFaceCategory('SP')
                    }}
                    className={`chooseBtn ${faceCategory === 'SP' ? 'chooseBtnAction' : ''} chooseBorrower`}
                >
                    ИП
                </button>
            </div>
            <div className='registerPhone'>
                <div className='email'>
                    <label className="">Телефон</label>
                    <div className="inputEmail inputTop">
                        <input
                            disabled={faceCategory === ''}
                            onChange={(e) => {
                                register(e)
                            }}
                            name='phone'
                            type="tel"
                            className="signInput signInputEmail"
                            placeholder="+7 (999) 999-99-99"
                        />
                        {checkCode === null ? <button
                                disabled={!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(signUpReduce.email)}
                                onClick={() => {
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

                            }}
                            name='phone_code'
                            type="text"
                            className="signInput"
                            placeholder="Подтвердить пароль"/>
                    </div>
                </div>
                <div className='password'>
                    <label className="">ФИО</label>
                    <div className={checkCode === null ? 'inputPasswordDisabled inputTop' : "inputPassword inputTop"}>
                        <input
                            disabled={checkCode === null}
                            onChange={(e) => {
                                if (/(?=.*?["a-zA-Z-0-9])/.test(e.nativeEvent.data)) {
                                    register(e)
                                }
                            }}
                            value={signUpReduce.password}
                            name='fio'
                            type="text"
                            className="signInput"
                            placeholder="Иванов Иван Иванович"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterName
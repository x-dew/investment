import React, {useReducer} from "react";
import './profileData.css'
import {reduce, dataProfile} from "../reducerProfile";


const ProfileData = () => {

    const [userData, dispatchData] = useReducer(reduce, dataProfile)
    return (
        <div className='profileData'>
            <div className='userData'>
                <div className='userDataList'>
                    <h3>Персональные данные</h3>
                    <div className='userList'>
                        <ul>
                            <li>ФИО</li>
                            <li>Дата рождения</li>
                            <li>Телефон</li>
                            <li>ИНН</li>
                            <li>Место рождения</li>
                            <li>Адрес регистрации по месту жительства</li>
                        </ul>
                        <ul className='dataUser'>
                            <li><p>ФИО</p></li>
                            <li><p>Дата рождения</p></li>
                            <li><p>Телефон</p></li>
                            <li><p>ИНН</p></li>
                            <li><p>Место рождения</p></li>
                            <li><p>Адрес регистрации по месту жительства</p></li>
                        </ul>
                    </div>
                </div>

                <div className='userDataList'>
                    <h3>Паспортные данные</h3>
                    <div className='userList'>
                        <ul>{Object.values(userData).map(value => {
                            console.log(value)
                           return <li><span>{value}</span></li>
                        })}
                        </ul>
                        <ul className='dataUser'>
                            <li><p>ФИО</p></li>
                            <li><p>Дата рождения</p></li>
                            <li><p>Телефон</p></li>
                            <li><p>ИНН</p></li>
                            <li><p>Место рождения</p></li>
                            <li><p>Адрес регистрации по месту жительства</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileData
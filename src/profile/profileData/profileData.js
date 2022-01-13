import React, {useReducer, useState} from "react";
import './profileData.css'
import {reduce, dataProfile} from "../reducerProfile";
import PassportData from "./passportData";


const ProfileData = () => {

    const [userData, dispatchData] = useReducer(reduce, dataProfile)
    const [editButton, setEditButton] = useState(false)

    console.log(editButton)

    {
        if (editButton === false) {
            for (let key in userData) {
                if (userData[key] === '') {
                    console.log('1')
                    userData[key] = 'Заполните поле'
                }
            }
        }else {
            for (let key in userData) {
                if (userData[key] === 'Заполните поле') {
                    console.log('1')
                    userData[key] = ''
                }
            }
        }
    }


    const profileFun = (e) => {
        dispatchData({
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    return (
        <div className='profileData'>
            <div className='userData'>
                <div className='userDataList'>
                    <div className='editButton'>
                        <h3>Персональные данные</h3>
                        <button onClick={() => {
                            setEditButton(editButton === false ? true : false)
                        }}>Редактировать
                        </button>
                    </div>
                    <div className={editButton === false ? 'userList' : 'userList editUserData'}>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">ФИО:</label>
                            <input
                                onChange={(e) => {
                                    profileFun(e)
                                }}
                                name='fio'
                                style={userData.fio === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                                disabled={!editButton}
                                className="userDataTabsInput"
                                value={userData.fio}
                            />
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Дата рождения:</label>
                            <input
                                style={userData.dataBorn === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                                onChange={(e) => {
                                    profileFun(e)
                                }}
                                name='dataBorn'
                                disabled={!editButton}
                                className="userDataTabsInput"
                                value={userData.dataBorn}
                            />
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Телефон:</label>
                            <input
                                style={userData.phone === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                                onChange={(e) => {
                                    profileFun(e)
                                }}
                                name='phone'
                                disabled={!editButton}
                                className="userDataTabsInput"
                                value={userData.phone}
                            />
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">ИНН:</label>
                            <input
                                style={userData.inn === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                                onChange={(e) => {
                                    profileFun(e)
                                }}
                                name='inn'
                                disabled={!editButton}
                                className="userDataTabsInput"
                                value={userData.inn}
                            />
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Место рождения:</label>
                            <input
                                style={userData.livesBorn === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                                onChange={(e) => {
                                    profileFun(e)
                                }}
                                name='livesBorn'
                                disabled={!editButton}
                                className="userDataTabsInput"
                                value={userData.livesBorn}
                            />
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Адрес регистрации по месту жительства:</label>
                            <input
                                onChange={(e) => {
                                    profileFun(e)
                                    console.log(userData.address)
                                }}
                                name='address'
                                style={userData.address === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                                disabled={!editButton}
                                value={userData.address}
                                className={userData.address === 'Заполните поле' ? 'userDataTabsInput TabsInput' : 'userDataTabsInput'}
                            />
                        </div>
                    </div>
                </div>
                <PassportData/>
            </div>
        </div>
    )
}
export default ProfileData
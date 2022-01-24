import React, {useReducer, useState} from "react";
import {dataProfile, reduce} from "../reducerProfile";

const UserData = ({data}) => {

    const [userData, dispatchData] = useReducer(reduce, dataProfile)
    const [editButton, setEditButton] = useState(false)

    {
        if (editButton === false) {
            for (let key in userData) {
                if (userData[key] === '') {
                    userData[key] = 'Заполните поле'
                }
            }
        } else {
            for (let key in userData) {
                if (userData[key] === 'Заполните поле') {
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
        <div className='userDataList'>
            <div className='table__title'>
                <p>Персональные данные</p>
                <div className='editButton'>
                    {
                        editButton === false ? <button onClick={() => {
                            setEditButton(true)
                        }}>Редактировать
                        </button> : ''
                    }

                </div>
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
                        }}
                        name='address'
                        style={userData.address === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                        disabled={!editButton}
                        value={userData.address}
                        className={userData.address === 'Заполните поле' ? 'userDataTabsInput TabsInput' : 'userDataTabsInput'}
                    />
                </div>
                {
                    editButton === true ? <div className='tableInput__button'>
                        <button className='saveButton'>Сохранить</button>
                        <button
                            onClick={() => setEditButton(false)}
                            className='backButton'>Отмена
                        </button>
                    </div> : ''
                }

            </div>
        </div>
    )
}

export default UserData
import React, {useReducer, useState} from "react";
import './profileData.css'
import {reduce, dataProfile} from "../reducerProfile";
import PassportData from "./passportData";


const ProfileData = () => {

    const [userData, dispatchData] = useReducer(reduce, dataProfile)
    const [editButton,setEditButton] = useState(false)

    return (
        <div className='profileData'>
            <div className='userData'>
                <div className='userDataList'>
                    <div className='editButton'>
                        <h3>Персональные данные</h3>
                        <button onClick={()=> {
                            setEditButton(editButton === false ? true : false)
                        }}>Редактировать</button>
                    </div>
                    <div className={editButton === false ? 'userList' : 'userList editUserData'}>
                        <div className="userDataTabs">
                            <label  className="userDataTabsLabel">ФИО:</label>
                            <input disabled={!editButton} className="userDataTabsInput" placeholder={userData.fio}/>
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Дата рождения:</label>
                            <input disabled={!editButton} className="userDataTabsInput" placeholder={userData.dataBorn}/>
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Телефон:</label>
                            <input disabled={!editButton} className="userDataTabsInput" placeholder={userData.phone}/>
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">ИНН:</label>
                            <input disabled={!editButton} className="userDataTabsInput" placeholder={userData.inn}/>
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Место рождения:</label>
                            <input disabled={!editButton} className="userDataTabsInput" placeholder={userData.livesBorn}/>
                        </div>
                        <div className="userDataTabs">
                            <label className="userDataTabsLabel">Адрес регистрации по месту жительства:</label>
                            <input disabled={!editButton} className="userDataTabsInput" placeholder={userData.address}/>
                        </div>
                    </div>
                </div>
                <PassportData/>
            </div>
        </div>
    )
}
export default ProfileData
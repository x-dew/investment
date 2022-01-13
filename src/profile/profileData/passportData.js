import React, {useReducer,useState} from "react";
import './profileData.css'
import {reduce, dataProfile,passportData} from "../reducerProfile";

const PassportData = ()=>{

    const [passportUser, dispatchPassportData] = useReducer(reduce, passportData)
    const [editButton,setEditButton] = useState(false)

    {
        if (editButton === false) {
            for (let key in passportUser) {
                if (passportUser[key] === '') {
                    console.log('1')
                    passportUser[key] = 'Заполните поле'
                }
            }
        }else {
            for (let key in passportUser) {
                if (passportUser[key] === 'Заполните поле') {
                    console.log('1')
                    passportUser[key] = ''
                }
            }
        }
    }


    const profileFun = (e) => {
        dispatchPassportData({
            payload: {
                name: e.target.name,
                value: e.target.value
            }
        })
    }

    return(
        <div className='userDataList'>
            <div className='editButton'>
                <h3>Паспортные данные</h3>
                <button onClick={()=> {
                    setEditButton(editButton === false ? true : false)
                }}>Редактировать</button>
            </div>
            <div className={editButton === false ? 'userList' : 'userList editUserData'}>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Серия и номер паспорта:</label>
                    <input
                        name='SeriesAndNumber'
                         onChange={(e) => {
                                    profileFun(e)
                                }}
                        style={passportUser.SeriesAndNumber === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                        disabled={!editButton}
                        className="userDataTabsInput"
                        value={passportUser.SeriesAndNumber}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Дата выдачи:</label>
                    <input
                        name='dateIssue'
                         onChange={(e) => {
                                    profileFun(e)
                                }}
                        style={passportUser.dateIssue === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                        disabled={!editButton}
                        className="userDataTabsInput"
                        value={passportUser.dateIssue}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Кем выдан:</label>
                    <input
                        name='issuedBy'
                         onChange={(e) => {
                                    profileFun(e)
                                }}
                        style={passportUser.issuedBy === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                        disabled={!editButton}
                        className="userDataTabsInput"
                        value={passportUser.issuedBy}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Код подразделения:</label>
                    <input
                        name='departmentCode'
                         onChange={(e) => {
                                    profileFun(e)
                                }}
                        style={passportUser.departmentCode === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                        disabled={!editButton}
                        className="userDataTabsInput"
                        value={passportUser.departmentCode}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Сканы паспорта:</label>
                    <input
                        name='PassportScans'
                         onChange={(e) => {
                                    profileFun(e)
                                }}
                        style={passportUser.PassportScans === 'Заполните поле' ? {color: 'red'} : {color: 'black'}}
                        disabled={!editButton}
                        className="userDataTabsInput"
                        value={passportUser.PassportScans}/>
                </div>
            </div>
        </div>
    )
}
export  default PassportData
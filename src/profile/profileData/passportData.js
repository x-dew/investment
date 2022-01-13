import React, {useReducer,useState} from "react";
import './profileData.css'
import {reduce, dataProfile,passportData} from "../reducerProfile";

const PassportData = ()=>{

    const [passportUser, dispatchPassportData] = useReducer(reduce, passportData)
    const [editButton,setEditButton] = useState(false)


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
                    <input disabled={!editButton} className="userDataTabsInput" placeholder={passportUser.SeriesAndNumber}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Дата выдачи:</label>
                    <input disabled={!editButton} className="userDataTabsInput" placeholder={passportUser.dateIssue}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Кем выдан:</label>
                    <input disabled={!editButton} className="userDataTabsInput" placeholder={passportUser.issuedBy}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Код подразделения:</label>
                    <input disabled={!editButton} className="userDataTabsInput" placeholder={passportUser.departmentCode}/>
                </div>
                <div className="userDataTabs">
                    <label className="userDataTabsLabel">Сканы паспорта:</label>
                    <input disabled={!editButton} className="userDataTabsInput" placeholder={passportUser.PassportScans}/>
                </div>
            </div>
        </div>
    )
}
export  default PassportData
import React, {useReducer, useState} from "react";
import './profileData.css'
import {reduce, dataProfile} from "../reducerProfile";
import PassportData from "./passportData";
import UserData from "./userData";


const ProfileData = () => {

    return (
        <div className='profileData'>
            <h2>Анкетные данные</h2>
            <div className='userData'>
                <UserData/>
                <PassportData/>
            </div>
        </div>
    )
}
export default ProfileData
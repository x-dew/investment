import React, {useReducer, useState} from "react";
import './profileData.css'
import {reduce, dataProfile} from "../reducerProfile";
import PassportData from "./passportData";
import UserData from "./userData";
import InternationalOrganization from "./internationalOrganization/internationalOrganization";


const ProfileData = () => {

    return (
        <div className='profileData'>
            <h2>Анкетные данные</h2>
            <div className='userData'>
                <UserData/>
                <PassportData/>
                <InternationalOrganization/>
            </div>
        </div>
    )
}
export default ProfileData
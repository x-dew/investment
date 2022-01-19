import React, {useReducer, useState} from "react";
import './profileData.css'
import {reduce, dataProfile} from "../reducerProfile";
import PassportData from "./passportData";
import UserData from "./userData";
import InternationalOrganization from "./internationalOrganization/internationalOrganization";
import RelativesYour from "./relativesYour/relativesYour";
import BeneficialOwners from "./beneficialOwners/beneficialOwners";
import Beneficial from "./beneficiaries/beneficiaries";


const ProfileData = () => {

    return (
        <div className='profileData'>
            <h2>Анкетные данные</h2>
            <div className='userData'>
                <UserData/>
                <PassportData/>
                <InternationalOrganization/>
                <RelativesYour/>
                <BeneficialOwners/>
                <Beneficial/>
            </div>
        </div>
    )
}
export default ProfileData
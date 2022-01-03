import React from "react";

export const signUpData = {
    youName: '',
    youEmail: '',
    youPassword: ''
}

export const signInData = {
    youEmail: '',
    youPassword: ''
}

const registerEmail = {
    email: "",
    email_code: ''
}

const registerPhone = {
    phone: '',
    phone_code: ''
}

const registerObjekt = {
    email: "investor@incrowd.ru",
    email_code: 1689,
    phone: "+7(977)586-20-70",
    phone_code: 5437,
    role: "investor",
    legal_form_type: "indiv",
    password: "investorIncrowd",
    confidentiality_acceptance: true,
    fio: "Инвестор",
    without_patronymic: false
}


export const reduce = (state, action) => {
    return {
        ...state,
        [action.payload.name]: action.payload.value
    }
}

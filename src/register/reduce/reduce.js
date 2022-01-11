import React from "react";

export const signInData = {
    email: '',
    password: ''
}

export const signUpData = {
    email: '',
    email_code: '',
    phone: '',
    phone_code: '',
    role: '',
    legal_form_type: "",
    password: "",
    confidentiality_acceptance: true,
    fio: "",
    without_patronymic: false
}


export const reduce = (state, action) => {
    return {
        ...state,
        [action.payload.name]: action.payload.value
    }
}

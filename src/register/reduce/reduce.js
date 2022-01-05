import React from "react";

// export const signUpData = {
//     name: '',
//     email: '',
//     email_code: '',
//     password: ''
// }

export const signInData = {
    youEmail: '',
    youPassword: ''
}


export const signUpDataPhone = {
    phone: '',
    phone_code: ''
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

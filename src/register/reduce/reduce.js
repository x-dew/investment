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

export const reduce = (state, action) => {
    return {
        ...state,
        [action.payload.name]: action.payload.value
    }
}

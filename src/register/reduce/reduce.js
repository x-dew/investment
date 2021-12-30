import React from "react";

 export const signUp = {
    youName: '',
    youEmail: '',
    youPassword: ''
}

export const signIn = {
    youEmail: '',
    youPassword: ''
}

export const reduce = (state, action) => {
    return {
        ...state,
        [action.payload.name]: action.payload.value
    }
}

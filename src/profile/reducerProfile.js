export const dataProfile = {
    fio: '',
    dataBorn: '',
    phone: '',
    inn: '',
    livesBorn: '',
    address: '',
}

export const passportData = {
    SeriesAndNumber: '',
    dateIssue: '',
    issuedBy: '',
    departmentCode: '',
    PassportScans: '',
}


export const listMenu = {
    project:'Лента проектов',
    briefcase:'Ваш портфель',
    operations:'История операций',
    profile:'Профиль',
    documents:'Ваши документы'
}



export const reduce = (state, action) => {
    return {
        ...state,
        [action.payload.name]: action.payload.value
    }
}


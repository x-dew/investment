export const dataProfile = {
    fio: 'Иванов Иван Иванович',
    dataBorn: '',
    phone: '+7 (999) 969 59 06',
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

export const choiceOfficial ={
    official:'Нет'
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
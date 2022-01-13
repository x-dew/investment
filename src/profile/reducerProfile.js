export const dataProfile = {
    fio: 'Иванов Иван Иванович',
    dataBorn: '16.08.1992',
    phone: '+7 (999) 969 59 06',
    inn: '6449013711',
    livesBorn: '',
    address: '',
}

export const passportData = {
    SeriesAndNumber: '2216 608713',
    dateIssue: '23.08.2009',
    issuedBy: 'Отделом УФМС по Нижегородской обл. в Приокском р-не гор. Нижнего Новгорода\n',
    departmentCode: '6449013711',
    PassportScans: '',
}

export const reduce = (state, action) => {
    return {
        ...state,
        [action.payload.name]: action.payload.value
    }
}
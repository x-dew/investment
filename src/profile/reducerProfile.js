export const dataProfile = {
    fio:'Иванов Иван Иванович',
    dataBorn:'16.08.1992',
    phone:'+7 (999) 969 59 06',
    inn:'6449013711',
    livesBorn:'',
    address:''
}

export const reduce = (state,action) =>{
    return{
        ...state,
        [action.payload.name]:action.payload.value
    }
}
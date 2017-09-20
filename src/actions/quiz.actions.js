import C from '../store/constants'

export const saveResponse = (response) => {
    return { type:C.ADD_RESPONSE , response }
}

export const getResponse = (response) => {
    return { type:C.GET_RESPONSE , response }
}
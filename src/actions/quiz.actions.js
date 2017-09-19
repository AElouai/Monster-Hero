import C from '../store/constants'

export const saveResponse = (response) => {
    return { type:C.ADD_RESPONSE , response }
}
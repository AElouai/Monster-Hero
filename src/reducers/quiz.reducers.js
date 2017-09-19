import C from '../store/constants'

export const response = (state = [] , action) => {
    switch (action.type){
        case C.ADD_RESPONSE :
            return [ ...state,
                Object.assign({} , action.response )
            ];

        default:
            return state
    }
};


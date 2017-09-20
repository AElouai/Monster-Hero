import C from '../store/constants'

export const response = (state = [] , action) => {
    switch (action.type){
        case C.ADD_RESPONSE :

            return [ ...state,
                Object.assign({} , action.response )
            ];
        case C.GET_RESPONSE :
            console.log(C.GET_RESPONSE , state ,  action  );

            return state;

        default:
            return state
    }
};


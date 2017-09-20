import C from '../store/constants'

export const response = (state = [] , action) => {
    switch (action.type){
        case C.ADD_RESPONSE :
            console.log(C.ADD_RESPONSE , [ ...state,
                Object.assign({} , action.response )
            ]);

            return [ ...state,
                Object.assign({} , action.response )
            ];

        default:
            return state
    }
};


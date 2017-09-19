export default function quizReducers(state = [] , action) {
    // console.log('quizReducers action' , action , state);

    switch (action.type){
        case 'SAVE_RESPONSE' :
            /*console.log('SAVE_RESPONSE action' , action);
            console.log('SAVE_RESPONSE state' , state);
            console.log('SAVE_RESPONSE Array ' , [ ...state,
                Object.assign({} , action.response )
            ]);*/

            return [ ...state,
                Object.assign({} , action.response )
            ];

        default:
            return state
    }
}
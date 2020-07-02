import initState from './initState';

let initRed = (state = initState, action) => {
    switch ( action.type ) {
        case "LOG_IN" : 
            return {
                ...state,
                curUserId : action.data.newUserId,
                curPage : "MainPage"          
                }
        default : 
            return state
    }
}

export default initRed;
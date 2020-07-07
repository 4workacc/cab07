import initState from './initState';

let initRed = (state = initState, action) => {
    switch ( action.type ) {
        case "LOG_IN" : 
            return {
                ...state,
                curUserId : action.data.newUserId,
                curPage : "MainPage"          
                };
        case "SHOW_PAGE" :        
            return {
                ...state, 
                curMenuPage : action.page
            };
        default : 
            return state
    }
}

export default initRed;
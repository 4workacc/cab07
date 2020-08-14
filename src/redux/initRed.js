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
        case "SHOW_TEST" :        
            return {
                ...state, 
                curMenuPage : action.page,
                curUserTask : action.curUserTask
            };
        
        case "SWITCH_LOGIN_PANEL" : 
            return {
                ...state,
                curShowLoginPanel : action.newState,
                curUserId : action.userId,
                curLoginButText : action.newLoginButText,
                curMenuPage : "MainPage"
            }
        default : 
            return state
    }
}

export default initRed;
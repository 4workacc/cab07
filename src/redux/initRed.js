import initState from './initState';

let initRed = (state = initState, action) => {
    switch ( action.type ) {   
        case "ROUTE_TO_PAGE" : 
            return {
                ...state,
                curPage : action.pageName
            }
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
        case "LOGIN_PANEL_SWITCHER" :
            return {
                ...state,
                curShowLoginPanel : action.newCurShowLoginPanel
            }     
        case "SYSTEM_LOG_IN" :
            return {
                ...state,
                curUserId : action.curUserId,                
                curLoginButText : action.LoginButText,
                curPage : "MainPage"
            }   
        default : 
            return state
    }
}

export default initRed;
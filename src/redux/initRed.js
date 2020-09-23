import initState from './initState';

let initRed = ( state = initState, action ) => {
    switch ( action.type ) {
        case "LOG_IN" : 
            return {
                ...state,
                curPage : "MainPage",
                curId : action.id,
                curLoginButText : action.id === 12311?"AdminPanel":"Cabinet"
            };            
        case "GO_TO_LOGIN" : 
            return {
                ...state,
                curPage : "LoginPage"
            };            
        case "LOAD_TEST_LIST" : 
            return {
                ...state,
                testList : action.testList
            };
        case "SHOW_CARD" : 
            return {
                ...state, 
                curCard : action.card
            };
        default:
            return state;           
    }
}

export default initRed;
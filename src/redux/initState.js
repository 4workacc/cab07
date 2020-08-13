let initState = {
    curUserId : -1, //admin id = 12311
    curUserFIO : '',
    curPage : "MainPage",
    curMenuPage : "MP_Menu",
    curSubPage : "none",
    curShowLoginPanel : 0,    
    curLoginButText : "Уваход",
    curUserTask : '',
    mpNaprList : [
        {
            "title" : "napr0",
            "link"  : "",
            "isTrial" : "1"
        },
        {
            "title" : "napr1",
            "link"  : "",
            "isTrial" : "1"
        },
        {
            "title" : "napr2",
            "link"  : "",
            "isTrial" : "0"
        }
    ],

    mpTestsList: [],   
    mpTvorsList : [
        {
            "title" : "tvor0",
            "target" : "",
            "isTrial" : "1"
        },
        {
            "title" : "tvor1",
            "target" : "",
            "isTrial" : "0"
        },
        {
            "title" : "tvor2",
            "target" : "",
            "isTrial" : "1"
        }
    ],
    mpStratList : [
        {
            "title" : "strat0",
            "target" : "",
            "isTrial" : "1"
        },
        {
            "title" : "strat1",
            "target" : "",
            "isTrial" : "0"
        },
        {
            "title" : "strat2",
            "target" : "",
            "isTrial" : "1"
        }
    ],
    mpMislsList : [
        {
            "title" : "misl0",
            "target" : "",
            "isTrial" : "1"
        },
        {
            "title" : "misl1",
            "target" : "",
            "isTrial" : "0"
        },
        {
            "title" : "misl2",
            "target" : "",
            "isTrial" : "1"
        }
    ]    
}

export default initState;
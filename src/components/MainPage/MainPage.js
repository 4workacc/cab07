import React from 'react';
import "./MainPage.scss";

class MainPage extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            userId : -1,
            
            menuSet : [
                {
                    "title" : "Menu0",
                    "className" : "MainPage_MainMenu_0"
                },
                {
                    "title" : "Menu1",
                    "className" : "MainPage_MainMenu_1"
                },
                {
                    "title" : "Menu2",
                    "className" : "MainPage_MainMenu_2"
                },
                {
                    "title" : "Menu3",
                    "className" : "MainPage_MainMenu_3"
                },
                {
                    "title" : "Menu4",
                    "className" : "MainPage_MainMenu_4"
                },
                {
                    "title" : "Menu5",
                    "className" : "MainPage_MainMenu_5"
                },
                {
                    "title" : "Menu6",
                    "className" : "MainPage_MainMenu_6"
                }
            ],
            curMenuSet : [],
            curStartMenuIndex : 0
        }
    }
    showCurMenuSet(){
        this.state
    }
    render() {
        return (
            <div className = "MainPage">
                MainPage
            </div>
        )
    }
}

export default MainPage;
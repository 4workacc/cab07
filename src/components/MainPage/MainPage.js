import React from 'react';
import "./MainPage.scss";

import MP_Menu from './MP_Menu/MP_Menu';

class MainPage extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            userId : -1          
        }
    }
    showCurMenuSet(){
        // this.state
    }
    NavClickHandler( xx ) {
        this.props.switchToPage(xx)
    }
    render() {
        return (
            <div className = "MainPage">
                MainPage 
                <div className = "MP_MainNav">
                    <ul className = "MP_MainNav_HeadNav">
                        <li onClick = { (xx) => this.NavClickHandler( "MainPage" ) } >Галоўнае меню</li>
                        <li onClick = { (xx) => this.NavClickHandler( "Напрацоўкі" ) }>Напрацоўкі</li>
                        <li onClick = { (xx) => this.NavClickHandler( "Гульні" ) }>Гульні</li>
                        <li onClick = { (xx) => this.NavClickHandler( "Анімацыі" ) }>Анімацыі</li>
                        <li onClick = { (xx) => this.NavClickHandler( "Тэсты" ) }>Тэсты</li>
                        <li onClick = { (xx) => this.NavClickHandler( "Творчасць" ) }>Творчасць</li>
                        <li onClick = { (xx) => this.NavClickHandler( "Стратэгія" ) }>Стратэгія</li>
                        <li onClick = { (xx) => this.NavClickHandler( "Мысленне" ) }>Мысленне</li>                       
                    </ul>
                </div>  
                <MP_Menu />
            </div>
        )
    }
}

export default MainPage;
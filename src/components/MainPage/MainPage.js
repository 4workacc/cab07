import React, { useState, useEffect} from 'react';
import "./MainPage.scss";

import { useDispatch } from 'react-redux'; 

import MP_Menu from './MP_Menu/MP_Menu';
import MP_Games from './MP_Games/MP_Games';
import MP_Napr from './MP_Napr/MP_Napr';
import MP_Anims from './MP_Anims/MP_Anims';
import MP_Tests from './MP_Tests/MP_Tests';
import MP_Tvor from './MP_Tvor/MP_Tvor';
import MP_Strat from './MP_Strat/MP_Strat';
import MP_Misl from './MP_Misl/MP_Misl';

import { useSelector } from 'react-redux';

const MainPage = () =>{
    const dispatch = useDispatch();
    const [curPage, setPage] = useState();
    
    // const count = useSelector(state => state.counter.count);
    const curUserId = useSelector( state => state.curUserId );
    const curMenuPage = useSelector ( state => state.curMenuPage);

    useEffect(() => {
        let qq = <MP_Menu />;
        switch ( curMenuPage ) {
            case "MP_Menu" : qq = <MP_Menu />; break;
            case "MP_Napr"  : qq = <MP_Napr />; break;
            case "MP_Games"  : qq = <MP_Games />;break;
            case "MP_Anims"   : qq = <MP_Anims />; break;
            case "MP_Tests" : qq =<MP_Tests />; break;
            case "MP_Tvor" :  qq = <MP_Tvor />; break;
            case "MP_Strat" : qq = <MP_Strat />; break;
            case "MP_Misl" : qq = <MP_Misl />; break;
            default : qq = <MP_Menu />;
        }
        setPage( qq );
    }, [curMenuPage]);

    return(
        <div className = "MainPage">
            <div className = "MP_MainNav">
                <ul className = "MP_MainNav_HeadNav">
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Menu"
                    }) } >Галоўнае меню</li>
                    <li onClick = { (xx) => this.NavClickHandler( "Напрацоўкі" ) }>Напрацоўкі</li>
                    <li onClick = { (xx) => this.NavClickHandler( "Гульні" ) }>Гульні</li>
                    <li onClick = { (xx) => this.NavClickHandler( "Анімацыі" ) }>Анімацыі</li>
                    <li onClick = { (xx) => this.NavClickHandler( "Тэсты" ) }>Тэсты</li>
                    <li onClick = { (xx) => this.NavClickHandler( "Творчасць" ) }>Творчасць</li>
                    <li onClick = { (xx) => this.NavClickHandler( "Стратэгія" ) }>Стратэгія</li>
                    <li onClick = { (xx) => this.NavClickHandler( "Мысленне" ) }>Мысленне</li>                       
                </ul>
            </div>
            { curPage }
            { curUserId }          
        </div>
    )
}

export default MainPage;
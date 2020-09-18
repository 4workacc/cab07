import React, { useState, useEffect} from 'react';
import "./MainPage.css";

import { useDispatch } from 'react-redux'; 

import MP_Menu from './MP_Menu/MP_Menu';
import MP_Games from './MP_Games/MP_Games';
import MP_Napr from './MP_Napr/MP_Napr';
import MP_Anims from './MP_Anims/MP_Anims';
import MP_Tests from './MP_Tests/MP_Tests';
import MP_Tvor from './MP_Tvor/MP_Tvor';
import MP_Strat from './MP_Strat/MP_Strat';
import MP_Misl from './MP_Misl/MP_Misl';

//tests
import Test0 from '../readyPages/tests/test0/test0';
import Test1 from '../readyPages/tests/Test1/Test1';
import Test2 from '../readyPages/tests/Test2/Test2';
// anims
import Anim0 from '../readyPages/anims/Anim0/Anim0';
// portal
import MPortal from '../Portal/MPortal';
import LoginPage from '../LoginPage/LoginPage';

import { useSelector } from 'react-redux';
import Cabinet from '../Cabinet/Cabinet';
import AdminPanel from '../AdminPanel/AdminPanel';

const MainPage = () =>{
    const dispatch = useDispatch();
    const [curPage, setPage] = useState();
    
    // const count = useSelector(state => state.counter.count);
    const curUserId = useSelector( state => state.curUserId );
    const curMenuPage = useSelector ( state => state.curMenuPage);
    const curLoginButText = useSelector( state => state.curLoginButText);
    const curUserTask = useSelector( state => state.curUserTask);
    
    const curShowLoginPanel = useSelector( state => state.curShowLoginPanel);
    useEffect(() => {
        document.title = "Вугалок беларускай мовы"
     }, []);
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

            case "Cabinet" : qq = <Cabinet />; break;
            case "AdminPanel" : qq = <AdminPanel />; break;

            case "TEST_test0" : qq = <Test0 />; break;
            case "TEST_test1" : qq = <Test1 />; break;
            case "TEST_test2" : qq = <Test2 />; break;

            case "ANIM_anim0" : qq =<Anim0 />;break;
            default : qq = <MP_Menu />;
        }
        setPage( qq );
    }, [curMenuPage]);
    let loginButHandler = () =>{       
        switch ( curUserId ) {
            case -1 :
                dispatch({
                    type :"LOGIN_PANEL_SWITCHER",
                    newCurShowLoginPanel : curShowLoginPanel === 0 ? 1 : 0
                });
                break;
            case 12311 : 
                dispatch({
                    type : "SHOW_PAGE",
                    page : "AdminPanel"
                });
                break;     
            default :
                dispatch({
                    type : "SHOW_PAGE",
                    page : "Cabinet"
                });   
                break;            
        }            
    }
    return(
        <div className = "MainPage">
            <div className = "MP_MainNav">
                <ul className = "MP_MainNav_HeadNav">
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Menu"
                    }) } >Галоўнае меню</li>
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Napr"
                    }) }>Напрацоўкі</li>
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Games"
                    }) }>Гульні</li>
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Anims"
                     }) }>Анімацыі</li>
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Tests"
                    }) }>Тэсты</li>
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Tvor"
                    }) }>Творчасць</li>
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Strat"
                    }) }>Стратэгія</li>
                    <li onClick = { () => dispatch({
                        type : "SHOW_PAGE",
                        page : "MP_Misl"
                    }) }>Мысленне</li>                       
                </ul>
            </div>
            <div className = "MPmain">
                { curPage }            
            </div>
            <div 
                className = "MP_LoginPageBut"
                onClick = {()=>loginButHandler()}>{curLoginButText}</div>        
            <MPortal>
                <LoginPage />
            </MPortal>
        </div>
    )
}

export default MainPage;
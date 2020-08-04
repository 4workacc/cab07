import React, { useState, useEffect } from 'react';
import "./MP_Menu.css";

import { useDispatch } from 'react-redux';
import AShowPage from '../../../redux/actions/AShowPage';

const MP_Menu = () => {
    // redux
    const dispatch = useDispatch();
    // 
    const [ curMenuIndex, changeIndex ] = useState(0);
    const menuElements = [                        
                        {
                            "title" : "Напрацоўкі",
                            "class" : "MP_Menu_el MP_Menu_el_1",
                            "target": "MP_Napr"
                        },
                        {
                            "title" : "Гульні",
                            "class" : "MP_Menu_el MP_Menu_el_2",
                            "target" : "MP_Games"
                        },
                        {
                            "title" : "Анімацыі",
                            "class" : "MP_Menu_el MP_Menu_el_3",
                            "target" : "MP_Anims"
                        },
                        {
                            "title" : "Тэсты",
                            "class" : "MP_Menu_el MP_Menu_el_4",
                            "target" : "MP_Tests"
                        },
                        {
                            "title" : "Творчасць",
                            "class" : "MP_Menu_el MP_Menu_el_5",
                            "target" : "MP_Tvor"
                        },
                        {
                            "title" : "Стратэгія",
                            "class" : "MP_Menu_el MP_Menu_el_6",
                            "target" : "MP_Strat"
                        },
                        {
                            "title" : "Мысленне",
                            "class" : "MP_Menu_el MP_Menu_el_7",
                            "target" : "MP_Misl"
                        }               
                    ];
    const [ curMenuElements, setCurMenuElements ] = useState([]);
    useEffect ( ()=> {
        let arr = [ 
            menuElements[curMenuIndex], 
            menuElements[curMenuIndex + 1], 
            menuElements[curMenuIndex + 2],
            menuElements[curMenuIndex + 3]
        ];
        setCurMenuElements(
            [
                <div 
                    className = {arr[0].class}
                    onClick={() =>{dispatch(AShowPage(arr[0].target))}}>
                    <p>{arr[0].title}</p>
                </div>,
                <div 
                    className = {arr[1].class}
                    onClick={() =>{dispatch(AShowPage(arr[1].target))}}>
                    <p>{arr[1].title}</p>
                </div>,
                <div 
                    className = {arr[2].class}
                    onClick={() =>{dispatch(AShowPage(arr[2].target))}}>
                    <p>{arr[2].title}</p>
                </div>,
                <div 
                    className = {arr[3].class}
                    onClick={() =>{dispatch(AShowPage(arr[3].target))}}>
                    <p>{arr[3].title}</p>
                </div>
            ]
        );        
    }, [curMenuIndex]);
    
    return(
        <div className = "MP_Menu">
            <div 
                className = "MP_Menu_but MP_Menu_butL"
                onClick =  {() => curMenuIndex > 0 ? changeIndex(curMenuIndex - 1):null}></div>
            { curMenuElements }
            <div 
                className = "MP_Menu_but MP_Menu_butR"
                onClick =  {() => curMenuIndex < 3 ? changeIndex(curMenuIndex + 1):null}></div>
        </div>
    )
}

export default MP_Menu;
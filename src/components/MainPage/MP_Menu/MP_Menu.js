import React, { useState, useEffect } from 'react';
import "./MP_Menu.scss";

// class MP_Menu extends React.Component {
//     constructor ( props ){
//         super ( props ) ;
//         this.state = {
//            ,
//             curMenuElements : [                
//             ],
//             curStartMenuIndex : 0
//         }
//         this.retCurMenu = this.retCurMenu.bind ( this );
//         this.menuElementClick = this.menuElementClick.bind ( this );
//         this.sliderButtonClick = this.sliderButtonClick.bind ( this );
//     }
//     retCurMenu() {
//         let qq = [ 
//             this.state.menuElements[ this.state.curStartMenuIndex ],
//             this.state.menuElements[ this.state.curStartMenuIndex +1 ],
//             this.state.menuElements[ this.state.curStartMenuIndex +2],
//             this.state.menuElements[ this.state.curStartMenuIndex +3]
//         ]
//         let arr = [];
//         qq.forEach( el => {
//             arr.push(
//                 <div 
//                     className = {el.class}
//                     onClick = { () => this.menuElementClick(el.target) }>
//                     <p>{el.title}</p>
//                 </div>
//             )
//         })
//         this.setState( (state) =>({
//             ...state,
//             curMenuElements : arr
//         }))
//     }
//     menuElementClick( target ){
//         alert ( target )
//     }
//     sliderButtonClick ( i ){
//         let startMenuIndex = this.state.curStartMenuIndex;        
//         if ( i > 0 ) {
//             if ( startMenuIndex <4 ) { startMenuIndex += 1}            
//         }
//         else {
//             if ( startMenuIndex > 0) { startMenuIndex -= 1}           
//         }
//         this.setState((state) =>({
//             ...state,           
//             curStartMenuIndex : startMenuIndex
//         }))
//     }
//     componentDidMount(){
//         this.retCurMenu();
//     }
//     render(){
//         return(
//             <div className = "MP_Menu">
//                 <div 
//                     className = "MP_Menu_but MP_Menu_butL"
//                     onClick = {()=>{ 
//                             this.sliderButtonClick( -1 ); 
//                             this.retCurMenu() }}></div>
//                { this.state.curMenuElements }
//                <div 
//                     className = "MP_Menu_but MP_Menu_butR"
//                     onClick = {()=>{ 
//                             this.sliderButtonClick( 1 );
//                             this.retCurMenu()}}></div>
//             </div>
//         )
//     }
// }

const MP_Menu = () => {
    const [ curMenuIndex, changeIndex ] = useState(0);
    const menuElements = [
                        {   
                            "title":"Галоўнае меню",
                            "class" : "MP_Menu_el MP_Menu_el_0",
                            "target" : "MP_Menu"
                        },
                        {
                            "title" : "Напрацоўкі",
                            "class" : "MP_Menu_el MP_Menu_el_1",
                            "target": "MP_Nap"
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
                <div className = {arr[0].class}>
                        <p>{arr[0].title}</p>
                </div>,
                <div className = {arr[1].class}>
                    <p>{arr[1].title}</p>
                </div>,
                <div className = {arr[2].class}>
                    <p>{arr[2].title}</p>
                </div>,
                <div className = {arr[3].class}>
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
                onClick =  {() => curMenuIndex < 4 ? changeIndex(curMenuIndex + 1):null}></div>
        </div>
    )
}

export default MP_Menu;
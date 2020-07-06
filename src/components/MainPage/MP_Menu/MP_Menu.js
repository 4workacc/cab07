import React from 'react';
import "./MP_Menu.scss";

class MP_Menu extends React.Component {
    constructor ( props ){
        super ( props ) ;
        this.state = {
            menuElements : [
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
            ],
            curMenuElements : [                
            ],
            curStartMenuIndex : 0
        }
        this.retCurMenu = this.retCurMenu.bind ( this );
        this.menuElementClick = this.menuElementClick.bind ( this );
        this.sliderButtonClick = this.sliderButtonClick.bind ( this );
    }
    retCurMenu() {
        let qq = [ 
            this.state.menuElements[ this.state.curStartMenuIndex ],
            this.state.menuElements[ this.state.curStartMenuIndex +1 ],
            this.state.menuElements[ this.state.curStartMenuIndex +2],
            this.state.menuElements[ this.state.curStartMenuIndex +3]
        ]
        let arr = [];
        qq.forEach( el => {
            arr.push(
                <div 
                    className = {el.class}
                    onClick = { () => this.menuElementClick(el.target) }>
                    <p>{el.title}</p>
                </div>
            )
        })
        this.setState( (state) =>({
            ...state,
            curMenuElements : arr
        }))
    }
    menuElementClick( target ){
        alert ( target )
    }
    sliderButtonClick ( i ){
        let startMenuIndex = this.state.curStartMenuIndex;        
        if ( i > 0 ) {
            if ( startMenuIndex <4 ) { startMenuIndex += 1} 
            else { startMenuIndex = 0}
        }
        else {
            if ( startMenuIndex > 1) { startMenuIndex -= 1}
            else { startMenuIndex = 4}
        }
        this.setState((state) =>({
            ...state,           
            curStartMenuIndex : startMenuIndex
        }))
    }
    componentDidMount(){
        this.retCurMenu();
    }
    render(){
        return(
            <div className = "MP_Menu">
                <div 
                    className = "MP_Menu_but MP_Menu_butL"
                    onClick = {()=>{ 
                            this.sliderButtonClick( -1 ); 
                            this.retCurMenu() }}></div>
               { this.state.curMenuElements }
               <div 
                    className = "MP_Menu_but MP_Menu_butR"
                    onClick = {()=>{ 
                            this.sliderButtonClick( 1 );
                            this.retCurMenu() }}></div>
            </div>
        )
    }
}

export default MP_Menu;
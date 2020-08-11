import React , { useState, useEffect } from 'react';
import './Test1.css';
// 11 клас тэст варыянт 2

import Test1_arr from './Test1_arr';

const Test1 = () => {
    const [ curQuest, SetCurQuest ] = useState(0);
    const [ mainScreen, SetMainScreen] = useState("Test1");
    const [rezScreen, SetRezScreen] = useState("Test1_none");
    const [a0, SetA0 ] = useState('');
    const [a1, SetA1 ] = useState('');
    const [a2, SetA2 ] = useState('');
    const [a3, SetA3 ] = useState('');
    const [a4, SetA4 ] = useState(''); 

    const [rightCount, AddRightAnswer ] = useState(0);
      
    return (
        <div className = "Test1">
            <div className = {mainScreen}>
                <p className = "Test1_Main_Quest">{Test1_arr[curQuest][0]}</p>
                <div className = "Test1_Main_AnsBar">
                    <span>
                        <input 
                            type = "checkbox"
                            name = "Test1_Main_Ans0_ch0"                
                            checked = { a0 !==''}                                        
                            onChange = {()=> a0 === ''?SetA0('1'):SetA0('')}
                            />
                        <label 
                            htmlFor = "Test1_Main_Ans0_ch0"
                            className = "Test1_Main_Ans_lab">{Test1_arr[curQuest][1][0]}</label>
                    </span>
                    <span>
                        <input 
                            type = "checkbox"
                            name = "Test1_Main_Ans0_ch1"
                            checked = { a1 !==''} 
                            onChange = {()=> a1 === ''?SetA1('2'):SetA1('')}/>
                        <label 
                            htmlFor = "Test1_Main_Ans0_ch1"
                            className = "Test1_Main_Ans_lab">{Test1_arr[curQuest][1][1]}</label>
                    </span>
                    <span>
                        <input 
                            type = "checkbox"
                            name = "Test1_Main_Ans0_ch2"
                            checked = { a2 !==''} 
                            onChange = {()=> a2 === ''?SetA2('3'):SetA2('')}/>
                        <label 
                            htmlFor = "Test1_Main_Ans0_ch2"
                            className = "Test1_Main_Ans_lab">{Test1_arr[curQuest][1][2]}</label>
                    </span>
                    <span>
                        <input 
                            type = "checkbox"
                            name = "Test1_Main_Ans0_ch3"
                            checked = { a3 !==''} 
                            onChange = {()=> a3 === ''?SetA3('4'):SetA3('')}/>
                        <label 
                            htmlFor = "Test1_Main_Ans0_ch3"
                            className = "Test1_Main_Ans_lab">{Test1_arr[curQuest][1][3]}</label>
                    </span>
                    <span className = {Test1_arr[curQuest][1][4]===""?"Test1_none":""}>
                        <input 
                            type = "checkbox"
                            name = "Test1_Main_Ans0_ch4"
                            checked = { a4 !==''} 
                            onChange = {()=> a4 === ''?SetA4('5'):SetA4('')}/>
                        <label 
                            htmlFor = "Test1_Main_Ans0_ch4"
                            className = "Test1_Main_Ans_lab">{Test1_arr[curQuest][1][4]}</label>
                    </span>
                    <div 
                        className = "Test1_Main_But"
                        onClick = {()=>{
                                if ( curQuest<19 ) {
                                    SetCurQuest(curQuest+1);
                                    SetA0('');
                                    SetA1('');
                                    SetA2('');
                                    SetA3('');
                                    SetA4('');
                                }
                                else {
                                    SetMainScreen("Test1_none");
                                    SetRezScreen("");
                                }
                                if ( a0+''+a1+''+a2+''+a3+''+a4 === Test1_arr[curQuest][2] ) {
                                    AddRightAnswer( rightCount+1 );
                                }
                            }}>
                    </div>
                    {}
                </div>
            </div>
            <div className = {rezScreen}>
                <p className = "Test1_Res_Text">
                    {"Вы набралі "+rightCount+" з 20 балаў ("+Math.floor(rightCount/20*100)+"%)"}
                </p>
            </div>
        </div>
    )
}

export default Test1;
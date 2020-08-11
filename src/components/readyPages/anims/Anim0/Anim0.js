import React, { useState, useEffect } from 'react';
import './Anim0.css';

import arr from './arr.js';

const Anim0 = () => {
    const [PicsArr, SetPicsArr ] = useState([[[],[],[],[],[]]]);    
    const [curQuest, SetCurQuest] = useState(0); 
    const [rightAnswer, AddRightAnswer] = useState(0);
    const [fr, setFr] = useState(['','','','']);
    const [se, setSe] = useState(['','','','']);
    const [curFraz, SetCurFraz] = useState('');
    const [curSe, SetCurSe] = useState('');
    const [ans, setAns] = useState('0,0,0,0,0,0,0,0,0,0');
    const [circleStyles, SetCircleStyles] = useState('ansNone,ansNone,ansNone,ansNone,ansNone,ansNone,ansNone,ansNone,ansNone,ansNone');
    
    let shuffle = (a) => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a
    }    
    
    useEffect (()=>{      
        let ar = [[],[],[],[],[]];
        let aq = [];
        let ind = 0; 
        while ( ind< 11 ) {
            let ii = Math.floor( Math.random()*arr.length);
            if ( aq.indexOf(ii) === -1 ) {
                aq[ind] = ii;
                ar[ind] = arr[ii];
                ind += 1; 
            }           
        } 
        for ( let i=0; i<ar.length; i++) {
            ar[i][0] = shuffle(ar[i][0]);
            ar[i][1] = shuffle(ar[i][1]);
        }
        SetPicsArr( ar );             
    },[]);
    return (
        <div>
            <div className = {curQuest<10?"anim0":"anim0_none"}>                 
                        <div className = {"anim0_pic0 anim0_pic_" + PicsArr[curQuest][4][0] +"_0"}></div>
                        <div className = {"anim0_pic1 anim0_pic_" + PicsArr[curQuest][4][0] +"_1"}></div>
                        <div className = "anim0_circleBar">
                            <div 
                                className = { "anim0_circle "+circleStyles.split(',')[0]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[1]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[2]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[3]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[4]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[5]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[6]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[7]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[8]}></div>
                            <div className = {"anim0_circle "+circleStyles.split(',')[9]}></div>
                        </div>
                        <div className = "anim0_fraz">
                            <p 
                                className = {"anim0_fraz_fraz0 "+fr[0]}
                                onClick = {()=>{
                                    setFr(['anim0_fraz_actived','','','']);
                                    SetCurFraz(PicsArr[curQuest][0][0]);
                                }}
                                >
                                    {PicsArr[curQuest][0][0]}                            
                            </p>
                            <p 
                                className = {"anim0_fraz_fraz1 "+fr[1]}
                                onClick = {()=>{
                                    setFr(['','anim0_fraz_actived','','']);
                                    SetCurFraz(PicsArr[curQuest][0][1]);
                                }}
                                >
                                {PicsArr[curQuest][0][1]}</p>
                            <p 
                                className = {"anim0_fraz_fraz2 "+fr[2]}
                                onClick = {()=>{
                                    setFr(['','','anim0_fraz_actived','',]);
                                    SetCurFraz(PicsArr[curQuest][0][2]);
                                }}
                                >
                                {PicsArr[curQuest][0][2]}</p>
                            <p 
                                className = {"anim0_fraz_fraz3 "+fr[3]}
                                onClick = {()=>{
                                    setFr(['','','','anim0_fraz_actived']);
                                    SetCurFraz(PicsArr[curQuest][0][3]);
                                }}
                                >
                                {PicsArr[curQuest][0][3]}</p>
                        </div>
                        <div className = "anim0_sence">
                            <p 
                                className = {"anim0_sence_sence0 "+se[0]}
                                onClick = {()=>{
                                    setSe(['anim0_fraz_actived','','','']);
                                    SetCurSe(PicsArr[curQuest][1][0]);                                
                                }}>
                                {PicsArr[curQuest][1][0]}</p>
                            <p 
                                className = {"anim0_sence_sence1 "+se[1]}
                                onClick = {()=>{
                                    setSe(['','anim0_fraz_actived','','']);
                                    SetCurSe(PicsArr[curQuest][1][1]);                                
                                }}>
                                {PicsArr[curQuest][1][1]}</p>
                            <p 
                                className = {"anim0_sence_sence2 "+se[2]}
                                onClick = {()=>{
                                    setSe(['','','anim0_fraz_actived','']);
                                    SetCurSe(PicsArr[curQuest][1][2]);                                
                                }}>
                                {PicsArr[curQuest][1][2]}</p>
                            <p 
                                className = {"anim0_sence_sence3 "+se[3]}
                                onClick = {()=>{
                                    setSe(['','','','anim0_fraz_actived']);
                                    SetCurSe(PicsArr[curQuest][1][3]);                                
                                }}>
                                {PicsArr[curQuest][1][3]}</p>
                        </div>
                        <div 
                            className = { (curFraz!=='')&&(curSe!=='')?"anim0_but":"anim0_none"}
                            onClick = {()=> {           
                                let aa = ans.split(',');                     
                                if ( curFraz === PicsArr[curQuest][2][0]) {                                    
                                    aa[curQuest] = aa[curQuest]/1;
                                    aa[curQuest] += 1;   
                                }                         
                                if ( curSe === PicsArr[curQuest][3][0]) {                                       
                                    aa[curQuest] = aa[curQuest]/1;
                                    aa[curQuest] += 1;                                                                         
                                }
                                if ( (curFraz !== PicsArr[curQuest][2][0]) && (curSe !== PicsArr[curQuest][3][0]) ) {
                                    aa[curQuest] = aa[curQuest]/1;
                                    aa[curQuest] = -1
                                };
                                  
                                let cs = circleStyles.split(',');
                                switch (aa[curQuest]) {
                                    case 0 : 
                                        cs[curQuest] = "ansNone";
                                        break;
                                    case -1 : 
                                        cs[curQuest]="ansZero";
                                        break;
                                    case 1 : 
                                        cs[curQuest]="ansHalf";
                                        AddRightAnswer(rightAnswer+1);
                                        break;
                                    case 2 : 
                                        cs[curQuest]="ansRight";
                                        AddRightAnswer(rightAnswer+2);
                                        break;
                                    default : {}
                                }                                
                                cs = cs.join(',');
                                SetCircleStyles(cs);
                                aa = aa.join(',');
                                setAns(aa); 
                                SetCurQuest(curQuest + 1);
                                SetCurFraz('');
                                SetCurSe('');
                                setFr(['','','','']);
                                setSe(['','','','']);
                            }}>                 
                        </div>
                    </div>
            <div className = {curQuest===10?"anim_rez":"anim0_none"}>
                        <p className = "anim0_rez_text">{"Ваш вынiк : "+Math.floor(rightAnswer/20*100)+ "%"}</p>
            </div>            
        </div>
        
    )
}

export default Anim0;
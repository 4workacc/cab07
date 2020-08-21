import React, { useState, useEffect } from 'react';
import './MP_Napr.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../../redux/actions/AShowTest';

const MP_Napr = () => {    
    const [ naprList, setList] = useState();
    const curUserId = useSelector( state =>state.curUserId);
    const dispatch = useDispatch();
   
    useEffect ( ()=>{       
        fetch('http://82.209.229.159/sql_getTestsList.php')
        .then((response) => {
            return response.json();
        })
        .then((data) => {                           
                let arr = [];  
                data.tests.map( el =>{                                    
                    let qq = el.allowIdList;
                    qq = qq.indexOf(',')===-1?[qq/1]:qq.split(',');
                    if (qq.length > 1 ){ qq = qq.map(el => el/1)};                             
                    qq = (qq.indexOf(curUserId)>-1||curUserId === 12311);                                                                                    
                    if (el.type === "NAPR") {
                        arr.push(
                            <li 
                                id = { 'test'+el.testId }
                                className = { qq ? "MP_Napr_li" : "MP_Napr_li0"}
                                title = { qq ? "" : "Для карыстання неабходна аўтарызація!"}
                                onClick = { qq ? ()=>{dispatch( AShowTest(el.target, 'napr'+el.taskId))} : ()=>{}}>
                                <a>{el.title}</a>
                            </li>)
                    }                   
                });
                setList(arr);                                                   
            });
        },[]); 

    return (
        <div className = "MP_Napr">
            <ol className = "MP_Napr_list">
                { naprList }
            </ol>
        </div>
    )
} 
export default MP_Napr;
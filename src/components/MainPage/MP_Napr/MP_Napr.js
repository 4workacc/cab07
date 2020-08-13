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
                    if (el.type === "NAPR") {
                        arr.push(
                            <li 
                                id = { 'napr'+el.testId}
                                className = {(el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId/1===12311)?"MP_Napr_li":"MP_Napr_li0"}
                                title = {(el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId/1===12311)?"":"Для карыстання неабходна аўтарызація!"}
                                onClick = {
                                    el.isTrial?
                                        ()=>{dispatch( AShowTest(el.target,'napr'+el.testId))}:
                                        (
                                            (el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId===12311)?
                                            ()=>{dispatch( AShowTest(el.target, 'napr'+el.taskId))}:
                                            ()=>{}
                                        )                                
                                    }>
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
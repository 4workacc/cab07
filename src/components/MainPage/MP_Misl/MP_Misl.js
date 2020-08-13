import React, {useState, useEffect} from 'react';
import './MP_Misl.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../../redux/actions/AShowTest';

const MP_Misl = () => {    
    const [ mislList, setList] = useState();
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
                    if (el.type === "MISL") {
                        arr.push(
                            <li 
                                id = { 'misl'+el.testId}
                                className = {(el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId/1===12311)?"MP_Misl_li":"MP_Misl_li0"}
                                title = {(el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId/1===12311)?"":"Для карыстання неабходна аўтарызація!"}
                                onClick = {
                                    el.isTrial?
                                        ()=>{dispatch( AShowTest(el.target,'misl'+el.testId))}:
                                        (
                                            (el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId===12311)?
                                            ()=>{dispatch( AShowTest(el.target, 'misl'+el.taskId))}:
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
    return(
        <div className = "MP_Misl">
            <ol className = "MP_Misl_list">
                { mislList }
            </ol>
        </div>
    )
}

export default MP_Misl;
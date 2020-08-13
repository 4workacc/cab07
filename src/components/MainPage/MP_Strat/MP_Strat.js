import React, {useState, useEffect} from 'react';
import './MP_Strat.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../../redux/actions/AShowTest';

const MP_Strat = () => {    
    const [ stratList, setList] = useState();
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
                    if (el.type === "STRAT") {
                        arr.push(
                            <li 
                                id = { 'strat'+el.testId}
                                className = {(el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId/1===12311)?"MP_Strat_li":"MP_Strat_li0"}
                                title = {(el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId/1===12311)?"":"Для карыстання неабходна аўтарызація!"}
                                onClick = {
                                    el.isTrial?
                                        ()=>{dispatch( AShowTest(el.target,'strat'+el.testId))}:
                                        (
                                            (el.allowIdList.split(',').indexOf(curUserId+"")>-1||curUserId===12311)?
                                            ()=>{dispatch( AShowTest(el.target, 'strat'+el.taskId))}:
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
        <div className = "MP_Strat">
            <ol className = "MP_Strat_list">
                { stratList }
            </ol>
        </div>
    )
}

export default MP_Strat;
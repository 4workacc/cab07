import React, {useState, useEffect} from 'react';
import './MP_Tests.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../../redux/actions/AShowTest';

const MP_Tests = () => {    
    const [ testList, setList] = useState();
    const dispatch = useDispatch();
    const curUserId = useSelector( state =>state.curUserId);
    
    useEffect ( ()=>{       
        fetch('https://cab07.000webhostapp.com/sql_getTestsList.php')
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
                    console.log( curUserId );                                                                
                    if (el.type === "TEST") {
                        arr.push(
                            <li 
                                id = { 'test'+el.testId }
                                className = { qq ? "MP_Tests_li" : "MP_Tests_li0"}
                                title = { qq ? "" : "Для карыстання неабходна аўтарызація!"}
                                onClick = { qq ? ()=>{dispatch( AShowTest(el.target, 'test'+el.taskId))} : ()=>{}}>
                                <a>{el.title}</a>
                            </li>)
                    }                   
                });
                setList(arr);                                                   
            });
        },[]);   
    return(
        <div className = "MP_Tests">         
            <ol className = "MP_Tests_list">
                { testList }
            </ol>
        </div>
    )
}

export default MP_Tests;
import React, {useState, useEffect} from 'react';
import './MP_Tvor.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../../redux/actions/AShowTest';

const MP_Tvor = () => {   
    const [ tvorList, setList] = useState();
    const curUserId = useSelector( state =>state.curUserId);
    const dispatch = useDispatch();
    
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
                    if (el.type === "TVOR") {
                        arr.push(
                            <li 
                                id = { 'tvor'+el.testId }
                                className = { qq ? "MP_Tvor_li" : "MP_Tvor_li0"}
                                title = { qq ? "" : "Для карыстання неабходна аўтарызація!"}
                                onClick = { qq ? ()=>{dispatch( AShowTest(el.target, 'tvor'+el.taskId))} : ()=>{}}>
                                <a>{el.title}</a>
                            </li>)
                    }                   
                });
                setList(arr);                                                   
            });
        },[]); 

    return(
        <div className = "MP_Tvors">
            <ol className = "MP_Tvors_list">
                { tvorList }
            </ol>
        </div>
    )
}

export default MP_Tvor;
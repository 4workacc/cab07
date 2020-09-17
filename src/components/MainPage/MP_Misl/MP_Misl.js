import React, {useState, useEffect} from 'react';
import './MP_Misl.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../../redux/actions/AShowTest';

const MP_Misl = () => {    
    const [ mislList, setList] = useState();
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
                    if (el.type === "MISL") {
                        arr.push(
                            <li 
                                id = { 'misl'+el.testId }
                                className = { qq ? "MP_Misl_li" : "MP_Misl_li0"}
                                title = { qq ? "" : "Для карыстання неабходна аўтарызація!"}
                                onClick = { qq ? ()=>{dispatch( AShowTest(el.target, 'misl'+el.taskId))} : ()=>{}}>
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
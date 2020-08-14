import React, {useState, useEffect} from 'react';
import './MP_Anims.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../../redux/actions/AShowTest';

const MP_Anims = () => {
    const [ animList, setList] = useState();
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
                    console.log( curUserId );                                                                
                    if (el.type === "ANIM") {
                        arr.push(
                            <li 
                                id = { 'anim'+el.testId }
                                className = { qq ? "MP_Anim_li" : "MP_Anim_li0"}
                                title = { qq ? "" : "Для карыстання неабходна аўтарызація!"}
                                onClick = { qq ? ()=>{dispatch( AShowTest(el.target, 'anim'+el.taskId))} : ()=>{}}>
                                <a>{el.title}</a>
                            </li>)
                    }                   
                });
                setList(arr);                                                   
            });
        },[]); 
    return (
        <div className = "MP_Anim">
            <ol className = "MP_Anim_list">
                { animList }
            </ol>
        </div>
    )
}

export default MP_Anims;
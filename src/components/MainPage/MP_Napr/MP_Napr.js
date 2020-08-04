import React, { useState, useEffect } from 'react';
import './MP_Napr.css';

import { useSelector } from 'react-redux';

const MP_Napr = () => {
    const NaprList = useSelector( state => state.mpNaprList);
    const userId = useSelector ( state => state.curUserId);
    const [ naprList, setList] = useState();
    useEffect ( ()=>{
        let arr = [];        
        NaprList.map( el =>{
            arr.push(
                <li 
                    className = { (el.isTrial === "0" && userId === -1)?"MP_Napr_li0":"MP_Napr_li1"}    
                    title = {el.isTrial==="0"?"Для карыстання неабходна аўтарызація!":""}>
                        <a>{el.title}</a>
                    </li>)
        });
        setList(arr);
    },[NaprList]);
    return (
        <div className = "MP_Napr">
            <ol className = "MP_Napr_list">
                { naprList }
            </ol>
        </div>
    )
} 
export default MP_Napr;
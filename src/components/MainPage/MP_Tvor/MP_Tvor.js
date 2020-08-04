import React, {useState, useEffect} from 'react';
import './MP_Tvor.css';

import { useSelector } from 'react-redux';

const MP_Tvor = () => {
    const TvorsList = useSelector( state => state.mpTvorsList);
    const userId = useSelector ( state => state.curUserId);
    const [ tvorList, setList] = useState();
    useEffect ( ()=>{
        let arr = [];        
        TvorsList.map( el =>{
            arr.push(
                <li 
                    className = { (el.isTrial === "0" && userId === -1)?"MP_Tvors_li0":"MP_Tvors_li1"}
                    title = {el.isTrial==="0"?"Для карыстання неабходна аўтарызація!":""}>
                        <a>{el.title}</a>
                    </li>)
        });
        setList(arr);
    },[TvorsList]);
    return(
        <div className = "MP_Tvors">
            <ol className = "MP_Tvors_list">
                { tvorList }
            </ol>
        </div>
    )
}

export default MP_Tvor;
import React, {useState, useEffect} from 'react';
import './MP_Misl.scss';

import { useSelector } from 'react-redux';

const MP_Misl = () => {
    const MislsList = useSelector( state => state.mpMislsList);
    const userId = useSelector( state => state.curUserId);
    const [ mislList, setList] = useState();
    useEffect ( ()=>{
        let arr = [];        
        MislsList.map( el =>{
            arr.push(
                <li 
                    className = { (el.isTrial === "0" && userId === -1)?"MP_Misl_li0":"MP_Misl_li1"}
                    title = {(el.isTrial==="0" )?"Для карыстання неабходна аўтарызація!":""}>
                        <a>{el.title}</a>
                    </li>)
        });
        setList(arr);
    },[MislsList, userId]);
    return(
        <div className = "MP_Misl">
            <ol className = "MP_Misl_list">
                { mislList }
            </ol>
        </div>
    )
}

export default MP_Misl;
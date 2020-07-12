import React, {useState, useEffect} from 'react';
import './MP_Strat.scss';

import { useSelector } from 'react-redux';

const MP_Strat = () => {
    const StratsList = useSelector( state => state.mpStratList);
    const userId = useSelector ( state => state.curUserId);
    const [ stratList, setList] = useState();
    useEffect ( ()=>{
        let arr = [];        
        StratsList.map( el =>{
            arr.push(
                <li 
                className = { (el.isTrial === "0" && userId === -1)?"MP_Strat_li0":"MP_Strat_li1"}
                    title = {el.isTrial==="0"?"Для карыстання неабходна аўтарызація!":""}>
                        <a>{el.title}</a>
                    </li>)
        });
        setList(arr);
    },[StratsList]);
    return(
        <div className = "MP_Strat">
            <ol className = "MP_Strat_list">
                { stratList }
            </ol>
        </div>
    )
}

export default MP_Strat;
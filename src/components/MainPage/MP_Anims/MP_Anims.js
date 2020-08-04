import React, {useState, useEffect} from 'react';
import './MP_Anims.css';

import { useSelector } from 'react-redux';

const MP_Anims = () => {
    const AnimList = useSelector( state => state.mpAnimsList);
    const userId = useSelector ( state => state.curUserId);
    const [ animList, setList] = useState();
    useEffect ( ()=>{
        let arr = [];        
        AnimList.map( el =>{
            arr.push(
                <li 
                className = { (el.isTrial === "0" && userId === -1)?"MP_Anim_li0":"MP_Anim_li1"}
                    title = {el.isTrial==="0"?"Для карыстання неабходна аўтарызація!":""}>
                        <a>{el.title}</a>
                    </li>)
        });
        setList(arr);
    },[AnimList]);
    return (
        <div className = "MP_Anim">
            <ol className = "MP_Anim_list">
                { animList }
            </ol>
        </div>
    )
}

export default MP_Anims;
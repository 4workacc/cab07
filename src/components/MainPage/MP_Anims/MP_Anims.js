import React, {useState, useEffect} from 'react';
import './MP_Anims.scss';

import { useSelector } from 'react-redux';

const MP_Anims = () => {
    const AnimList = useSelector( state => state.mpAnimsList);
    const [ animList, setList] = useState();
    useEffect ( ()=>{
        let arr = [];        
        AnimList.map( el =>{
            arr.push(
                <li 
                    className = {"MP_Anim_li"+el.isTrial}
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
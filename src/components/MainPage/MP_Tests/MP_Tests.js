import React, {useState, useEffect} from 'react';
import './MP_Tests.scss';

import { useSelector } from 'react-redux';

const MP_Tests = () => {
    const TestsList = useSelector( state => state.mpTestsList);
    const [ testList, setList] = useState();
    useEffect ( ()=>{
        let arr = [];        
        TestsList.map( el =>{
            arr.push(
                <li 
                    className = {"MP_Tests_li"+el.isTrial}
                    title = {el.isTrial==="0"?"Для карыстання неабходна аўтарызація!":""}>
                        <a>{el.title}</a>
                    </li>)
        });
        setList(arr);
    },[TestsList]);
    return(
        <div className = "MP_Tests">
            <ol className = "MP_Tests_list">
                { testList }
            </ol>
        </div>
    )
}

export default MP_Tests;
import React, {useState, useEffect} from 'react';
import './MP_Tests.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowPage from '../../../redux/actions/AShowPage';

const MP_Tests = () => {
    const TestsList = useSelector( state => state.mpTestsList);
    const [ testList, setList] = useState();
    const dispatch = useDispatch();
    const curUserId = useSelector( state =>state.curUserId);
    useEffect ( ()=>{
        fetch('https://cab07.000webhostapp.com/getTestsList.php')
        .then((response) => {
            return response.json();
        })
        .then((data) => {                           
                let arr = [];  
                data.tests.map( el =>{
                    arr.push(
                    <li 
                        className = {el.isTrial?"MP_Tests_li":(el.allowIdList.indexOf(curUserId/1)>-1?"MP_Tests_li":"MP_Tests_li0")}
                        title = {el.isTrial?"":(el.allowIdList.indexOf(curUserId/1)>-1?"":"Для карыстання неабходна аўтарызація!")}
                        onClick = {
                            el.isTrial?
                                ()=>{dispatch( AShowPage(el.target))}:
                                (
                                    el.allowIdList.indexOf(curUserId/1)>-1?
                                    ()=>{dispatch( AShowPage(el.target))}:
                                    ()=>{}
                                )                                
                            }>
                        <a>{el.title}</a>
                    </li>)
                });
                setList(arr);
                                                   
        });
    },[]);   
    return(
        <div className = "MP_Tests">         
            <ol className = "MP_Tests_list">
                { testList }
            </ol>
        </div>
    )
}

export default MP_Tests;
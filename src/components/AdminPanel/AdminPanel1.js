import React, { useState, useEffect } from 'react';
import './AdminPanel1.css';

const AdminPanel = () => {
    // switching to tabs
    const [ curTab, setCurTab ] = useState(0);
    const [ fios, setFios ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const [ tests, setTests ] = useState([]);
    const [ results, setResults ] = useState([]);
    const [ curList, setCurList ] = useState([]); 
    const [ curFio, setCurFio ] = useState('');
    // 
    // ???????????????????????????????????????????????????????????????????????????
    // TEST RESULTS
    // ???????????????????????????????????????????????????????????????????????????
    let getUsersFioSet = () => {
        fetch('http://82.209.229.159/sql_Users.php')     
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let ww = new Map();
            let ff = [];
            data.users.map( el =>{
                ww.set(el.user_id, el.user_fio );   
                ff.push(el.user_fio==="admin"?'':el.user_fio);               
            })
            setUsers(ww);           
            setFios (ff);           
        });
    };
    let getTestsData = () => {
        fetch('http://82.209.229.159/sql_Tests.php')     
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let ww = [];
            data.tests.map( el =>{
                ww.push({ 
                    "id" : el.test_id/1,
                    "title" : el.test_title,
                    "target" : el.test_target,
                    "allowedList" : el.allowedList,
                    "type" : el.type
                })
            })
            setTests(ww);                      
        });
    };
    let getTasksResultsData = () =>{
        fetch('http://82.209.229.159/sql_getResults.php')     
        .then((response) => {
            return response.json();
        })
        .then((data) => {         
            let qq = [];  
            data.results.map ( el => {                 
                qq.push(
                    {
                        "user_id" : el.user_id/1,
                        "test_id" : el.test_id/1,
                        "start" : el.start,
                        "end" : el.end,
                        "result" : el.result/1    
                    }                   
                )});                
                setResults(qq); 
            }); 
    };
    // ???????????????????????????????????????????????????????????????????????????
    useEffect(()=>{
        getUsersFioSet();
        getTestsData();
        getTasksResultsData();
    });

    let genResultTable = () => {
        let arr = [];
        results.forEach( el => {    
                    
            let titl = tests[el.test_id/1]["title"];
            let usr  = users.get(""+el.user_id);
            if ( curFio === '' || curFio === usr ) {
                arr.push(
                    <tr className = "AP_tab_tr">
                        <td> { usr } </td>
                        <td> { titl }</td>
                        <td> {el.start} </td>
                        <td> {el.end.split(' ')[1]}   </td>
                        <td> {el.result }</td> 
                    </tr>
                )
            }           
        })
        setCurList(arr);
    };
    useEffect(()=>{
        genResultTable()
    },[users,tests,results]);
    let AP_tab0_fio_change = ( event ) => {
        setCurFio( event.target.value ); 
    }
    return (
        <div className = "AdminPanel">
            <div className = "AdminPanel_navbar">
                <button
                    className = "AP_navbar_but"
                    onClick = {() => {
                        setCurTab(0);
                    }}>Вынікі работ</button>
                <button
                    className = "AP_navbar_but"
                    onClick = {() => {
                        setCurTab(1);
                    }}>Задаць работу</button>
            </div>
            <div className = { curTab === 0? "AdminPanel_tab" : "AdminPanel_none"}>          
                <select                 
                    placeholder = "Фамілія вучня"
                    onChange = { AP_tab0_fio_change }
                    >
                    {fios.map(el =>{
                        return <option>{el}</option>
                    })}                                                  
                </select>
                <button                
                    onClick = { () => genResultTable() }>
                        Аднавіць табліцу
                    </button>            
                <table className = "AdminPanel_results">                
                    <thead className = "AP_tab_head">                    
                            <td>User</td>
                            <td>title</td>
                            <td>start</td>
                            <td>end</td>
                            <td>result</td>                        
                    </thead>
                    <tbody>
                        { curList }
                    </tbody>                             
                </table>              
            </div>
            <div className = { curTab === 1? "AdminPanel_tab" : "AdminPanel_none"}>
                <select>
                    { fios.map( el => {return <option>{el}</option> }) }
                    
                </select>
                <select>
                    { tests.map( el => {return <option>{el.title}</option> }) }
                </select>
            </div>
        </div>
    )
}

export default AdminPanel;
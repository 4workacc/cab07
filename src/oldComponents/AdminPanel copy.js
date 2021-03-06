import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
    const [users, setUsers ] = useState([]);
    const [tests, setTests] = useState([]);
    const [results , setResults] = useState([]); 

    const [curList, setCurList] = useState([]);
    const [fios, setFios ] = useState([]);
    const [curFio, setCurFio] = useState('');

    const [curTab, changeTab ] = useState(0);

    const [tasksUserFio, setTasksUserFio ] = useState('');
    const [tasksTestTile, setTaskTestTitle ] = useState('');

    useEffect(()=>{   
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
    },[]);

    useEffect(()=>{
        genResultTable();
    },[users,tests,results])
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
    }
    let selectChange = (event ) =>{
        setCurFio( event.target.value );        
    } 
    let refreshBut = () => {
        genResultTable();
    }
    let selectTasksFioChange = ( event ) => {        
        setTasksUserFio( event.target.value );
    }
    let selectTasksTestChange = (event ) => {
        setTaskTestTitle ( event.target.value );
    }
    return (
        <div className = "AdminPanel">
              
            <div className = "AdminPanel_nav">
                <button 
                    className = "AdminPanel_tab_0"
                    onClick = {()=>changeTab(0)}
                    value = "Вынікі работ">Вынікі работ</button>         
                <button
                    className = "AdminPanel_tab_1"
                    onClick = {()=>changeTab(1)}
                    value = "Задаць">Задаць</button>
            </div>
            
            <div className = {curTab === 0 ?"AdminPanel_rez":"AP_none"}>
            <div className = "AdminPanel_head">           
                <select                 
                    placeholder = "Фамілія вучня"
                    onChange = { selectChange }
                    >
                    {fios.map(el =>{
                        return <option>{el}</option>
                    })}                                                  
                </select>
                <button                
                    onClick = { () => refreshBut()}>
                        Аднавіць табліцу
                    </button>
            </div>
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
            <div className = {curTab === 1 ?"AdminPanel_tasks":"AP_none"}>
                tasks
                <select                 
                    placeholder = "Фамілія вучня"
                    onChange = { selectTasksFioChange }
                    >
                    {fios.map(el =>{
                        return <option>{el}</option>
                    })}                                                  
                </select>
                <select                 
                    placeholder = "Назва тэста"
                    onChange = { selectTasksTestChange }
                    >
                    {tests.map(el =>{
                        return <option>{el.title}</option>
                    })}                                                  
                </select>
                <input 
                    type = "datetime-local"
                    ></input>
                <input 
                    type = "datetime-local"
                    ></input>
                <button
                    onClick = {() => {
                        let qq = `http://82.209.229.159/sql_addTasks.php?
                        user_fio=`+tasksUserFio+`&
                        test_title=`+tasksTestTile+`&
                        start="`+"2020-05-01 11:11:11"+`"&
                        end="2020-05-01 11:11:11"`;
                        console.log ( qq )
                        fetch(qq)}}>ADD</button>
            </div>
           
        </div>
    )
}

export default AdminPanel;
// http://82.209.229.159/sql_setTestResult.php?user_id=2&test_id=2&start=2020-05-08_11:11:11&end=2020-05-08_11
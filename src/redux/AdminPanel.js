import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import AP_results from './AP_results/AP_results';
import AP_tasks from './AP_tasks/AP_tasks';

const AdminPanel = () => {
    const [users, setUsers ] = useState([]);
    const [tests, setTests] = useState([]);    
    const [fios, setFios ] = useState([]);

    const [curTab, changeTab ] = useState(0);

    useEffect(()=>{   
        fetch('https://cab07.000webhostapp.com/sql_Users.php')     
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
        fetch('https://cab07.000webhostapp.com/sql_Tests.php')     
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
        })                                     
    },[]);  
    
    let tabSwitcher = () => {
        let x =  <AP_results fios = {fios} tests = { tests } users = { users } />;;
        switch ( curTab ) {
            case 0 : x = <AP_results fios = {fios} tests = { tests } users = { users } />; break;
            case 1 : x = <AP_tasks fios = {fios} tests = {tests} />; break;
            default : x =  <AP_results fios = {fios} tests = { tests } users = { users } />;
        }
        return x;
    };
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
            { tabSwitcher() }
        </div>
    )
}

export default AdminPanel;
// http://82.209.229.159/sql_setTestResult.php?user_id=2&test_id=2&start=2020-05-08_11:11:11&end=2020-05-08_11
import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
    const [users, setUsers ] = useState([]);
    const [results , setResults] = useState([]); 
    useEffect(()=>{   
        fetch('http://82.209.229.159/sql_Users.php')     
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let ww = [];
            data.users.map( el =>{
                ww.push({ 
                    "fio" : el.user_fio,
                    "id" : el.user_id });
            })
            setUsers(ww);                      
        });
        fetch('http://82.209.229.159/sql_getResults.php')     
        .then((response) => {
            return response.json();
        })
        .then((data) => {         
            let qq = [];  
            data.results.map ( el => {
                let z = "";
                console.log(users);
                qq.push(
                    <li>
                        <a>{z+"___"+el.test_id+"_"+el.start+"_"+el.end+"_"+el.result}</a>                        
                    </li>
                )})
                setResults(qq); 
            });                               
    },[]);
    return (
        <div className = "AdminPanel">
            AdminPanel
            asdasdasd
            <ol>                
                <li>adsasd</li>
                {results}
            </ol>
        </div>
    )
}

export default AdminPanel;
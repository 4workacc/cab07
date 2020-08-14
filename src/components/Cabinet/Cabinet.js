import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import 'Cabenet.css';

const Cabinet = () => {
    return(
        <div className = 'Cabinet'>
            cabinet
=======
import './Cabinet.css';

import { useSelector } from 'react-redux';

const Cabinet = () => {
    const curUserId = useSelector(state => state.curUserId );
    const [tasks, setTasks ] = useState([]);
    const [tests, setTests] = useState([]);
    
    useEffect(() => {
        let ss = 'http://82.209.229.159/sql_getTasks.php?user_id='+curUserId;
        console.log ( ss );
        fetch(ss)     
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let ff = [];
            data.tasks.map( el =>{
                ff.push({
                    "test_id" : el.task_test_id,
                    "start" : el.task_start,
                    "end" : el.task_end
                });               
            })                     
            setTasks (ff);        
            console.log(ff);   
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
    },[])
    let genTaskList = () => {
        let arr = [];
        tasks.map(el=>{    
            let qq = '';
            for ( let i =0; i<tests.length; i++ ) {
                if (tests[i].id === el.test_id/1 ) {                    
                    qq = tests[i].title;
                    break;
                }
            }        
            arr.push (
                <div className = "Cabinet_task">                    
                    <p>{ qq }</p>
                    <p>{"пачатак "+el.start}</p>
                    <p>{"канец "+el.end}</p> 
                    <button className = "Cabinet_task_but">X</button>  
                </div>)
        })
       return arr;
    };
    return (
        <div className = "Cabinet">      
           <p className = "Cabinet_header"> Заданні для выканання </p>
           <div className = "Cabinet_task_bar">
               { genTaskList() }
           </div>        
            
>>>>>>> master
        </div>
    )
}

<<<<<<< HEAD
export default Cabinet;
=======
export default Cabinet;

<<<<<<< HEAD

// "TASKS"  : [
    // {
    //     "TASK" : "TEST_t01",
    //     "DATE_OPEN" : "2020-08-06_20-00",
    //     "DATE_CLOSE " : "2020-08-08_20-00",
    //     "ACTIVE" : 1,
    //     "TRYES" : [
    //         {
    //             "DATE_START" : "-",
    //             "DATE_END" : "-",
    //             "RESULT" : "-"
    //         }
    //     ]
    // }
>>>>>>> master
=======
>>>>>>> master

import React, { useState, useEffect } from 'react';
import './Cabinet.css';

import { useSelector, useDispatch } from 'react-redux';
import AShowTest from '../../redux/actions/AShowTest';


const Cabinet = () => {
    const curUserId = useSelector(state => state.curUserId );
    const [tasks, setTasks ] = useState([]);
    const [tests, setTests] = useState([]);
    const dispatch = useDispatch();
   
    let trClickHander = ( id ) => {
       dispatch( AShowTest(tests[id].target, 'test'+id))
    };

    useEffect(() => {
        let ss = 'https://cab07.000webhostapp.com/sql_getTasks.php?user_id='+curUserId;
        fetch(ss)     
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let ff = [];
            data.tasks.map( el =>{                              
                if ( 
                        ( Date.parse(el.task_start)/1 < Date.parse(new Date())/1)
                        &&
                        ( Date.parse(el.task_end)/1 > Date.parse(new Date())/1)
                    )
                    {
                    ff.push({
                        "test_id" : el.task_test_id,
                        "start" : el.task_start,
                        "end" : el.task_end
                    });   
                }                          
            })                     
            setTasks (ff);             
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
        });
    },[])
    let genTaskList = () => {
        let arr = [];
        tasks.map(el=>{    
            let qq = '';
            let ww = -1;
            for ( let i =0; i<tests.length; i++ ) {
                if (tests[i].id === el.test_id/1 ) {                    
                    qq = tests[i].title;
                    ww = tests[i].id;
                    break;
                }
            };   
            arr.push (
                <tr onClick = {()=>{ trClickHander( ww ); }}>
                    <td className = "CT0">
                        <p>{ qq }</p>    
                    </td>           
                    <td className = "CT1">
                        <p>{ el.start}</p>
                    </td>
                    <td className = "CT2">    
                        <p>{el.end}</p> 
                    </td>                                        
                </tr>)
        })
       return arr;
    };
    return (
        <div className = "Cabinet">      
           <p className = "Cabinet_header"> Заданні для выканання </p>
           <div className = "Cabinet_task_bar">
           <table className = "Cabinet_table">
                <thead>
                    <td className = "CT0">Nazva testa</td>
                    <td className = "CT1">пачатак</td>
                    <td className = "CT2">канец</td>
                </thead>
             { genTaskList() }
             </table>
           </div>        
            
        </div>
    )
}
export default Cabinet;

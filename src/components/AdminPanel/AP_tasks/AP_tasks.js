import React, { useState, useEffect } from 'react';
import './AP_tasks.css';

const AP_tasks = ({ fios, tests }) => {
    const [tasksUserFio, setTasksUserFio ] = useState('');
    const [tasksTestTile, setTaskTestTitle ] = useState('');

    let getNow = () =>{
        let now = new Date().toLocaleString();
        
        now = now.split(',');
        now[0] = now[0].split('.');
        let xx = now[0][0];
        now[0][0] = now[0][2];
        now[0][2] = xx;        
        now[0] = now[0].join('-');
        now[1] = (now[1].split(':')[0]+":"+now[1].split(':')[1]).trim();
        now = now.join('T');       
        return now;
    };

    const [ startTime, setStartTime ] = useState(getNow());
    const [ endTime, setEndTime ] = useState(getNow());

    let selectTasksFioChange = ( event ) => {        
        setTasksUserFio( event.target.value );
    };
    let selectTasksTestChange = (event ) => {
        setTaskTestTitle ( event.target.value );
    };
    
    return (
        <div className = "AdminPanel_tasks">
             <select                 
                    placeholder = "Фамілія вучня"
                    onChange = { selectTasksFioChange }
                    >
                    {fios.map(el =>{ return <option>{el}</option> })}                                                  
                </select>
                <select                 
                    placeholder = "Назва тэста"
                    onChange = { selectTasksTestChange }
                    >
                    {tests.map(el =>{ return <option>{el.title}</option> })}                                                  
                </select>
                <input 
                    className = "AP_tasks_startTime"
                    type = "datetime-local"
                    value = { startTime }
                    onChange = { (event) => setStartTime(event.target.value)}
                    ></input>
                <input 
                    className = "AP_tasks_endTime"
                    value = { endTime }
                    onChange = { (event) => setEndTime(event.target.value)}
                    type = "datetime-local"
                    ></input>

                <button
                    onClick = {() => {
                        let qq = `https://cab07.000webhostapp.com/sql_addTasks.php?
                        user_fio=`+tasksUserFio+`&
                        test_title=`+tasksTestTile+`&
                        start=`+startTime+`&
                        end=`+endTime;
                        console.log ( qq )
                        fetch(qq)
                        .then ((response) =>{
                            return response.json();
                        })
                        .then((data) =>{
                            alert( data.message );
                        })
                        }}>ADD</button>
            </div>                             
    )
}

export default AP_tasks;
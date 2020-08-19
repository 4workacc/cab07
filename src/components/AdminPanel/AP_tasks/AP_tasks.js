import React, { useState, useEffect } from 'react';
import './AP_tasks.css';

const AP_tasks = ({ fios, tests }) => {
    const [tasksUserFio, setTasksUserFio ] = useState('');
    const [tasksTestTile, setTaskTestTitle ] = useState('');

    const [ startTime, setStartTime ] = useState('');
    const [ endTime, setEndTime ] = useState('');

    let selectTasksFioChange = ( event ) => {        
        setTasksUserFio( event.target.value );
    }
    let selectTasksTestChange = (event ) => {
        setTaskTestTitle ( event.target.value );
    }
    
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
                    onChange = { (event) => setStartTime(event.target.value)}
                    ></input>
                <input 
                    className = "AP_tasks_endTime"
                    onChange = { (event) => setEndTime(event.target.value)}
                    type = "datetime-local"
                    ></input>

                <button
                    onClick = {() => {
                        let qq = `http://82.209.229.159/sql_addTasks.php?
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
                            alert( data.message )
                        })
                        }}>ADD</button>
            </div>                             
    )
}

export default AP_tasks;
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
    const [curFIO, setFIO] = useState('');
    const [curClass, setClass] = useState('');
    const [curTasks, setTasks] = useState([]);

    const curUserId = useSelector( state => state.curUserId );

    useEffect(() =>{           
        fetch('https://cab07.000webhostapp.com/readUserData.php?id='+curUserId)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                setFIO(data.FIO);     
                setClass(data.CLASS);           
                setTasks(data.TASKS);               
            });                           
    },[]);
    return (
        <div className = "Cabinet">            
            {curFIO}
            {curClass}
            
>>>>>>> master
        </div>
    )
}

<<<<<<< HEAD
export default Cabinet;
=======
export default Cabinet;


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

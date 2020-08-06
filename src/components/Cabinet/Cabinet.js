import React, { useState, useEffect } from 'react';
import './Cabinet.css';

import { useSelector } from 'react-redux';

const Cabinet = () => {
    const [curFIO, setFIO] = useState('');
    const [curClass, setClass] = useState('');

    const curUserId = useSelector( state => state.curUserId );

    useEffect(() =>{           
        fetch('https://cab07.000webhostapp.com/readUserData.php?id='+curUserId)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                setFIO(data.FIO);     
                setClass(data.CLASS);           
            });                           
    },[]);
    return (
        <div className = "Cabinet">            
            {curFIO}
            {curClass}
        </div>
    )
}

export default Cabinet;
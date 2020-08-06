import React, { useState, useEffect } from 'react';
import './Cabinet.css';

import { useSelector } from 'react-redux';

const Cabinet = () => {
    const [curFIO, setFIO] = useState('');
    const curUserId = useSelector( state => state.curUserId );

    useEffect(() =>{           
        fetch('https://cab07.000webhostapp.com/readUserData.php?id='+curUserId)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                alert( data.FIO);                
            });                           
    },[]);
    return (
        <div className = "Cabinet">
            Cabinet
            {curFIO}
        </div>
    )
}

export default Cabinet;
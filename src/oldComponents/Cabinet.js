import React, { useState, useEffect } from 'react';
import './Cabinet.css';

import CABtasks from './CABtasks/CABtasks';
import CABres from './CABres/CABres';

const Cabinet = () => {
    const [curScreen, changeCurScreen ] = useState(<CABtasks />);
    return (
        <div className = "Cabinet">  
            <button 
                className = "Cabinet_nav_but0"
                onClick = { () =>{ changeCurScreen(<CABtasks />)}}
                >Заданні</button> 
            <button 
                className = "Cabinet_nav_but1"
                onClick = { ()=> { changeCurScreen(<CABres />)}}>
                Вынікі</button>
            { curScreen }
        </div>
    )
}
export default Cabinet;

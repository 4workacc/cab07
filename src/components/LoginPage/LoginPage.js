import React, { useState, useEffect} from 'react';
import "./LoginPage.css";

import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';

const LoginPage = () =>{

    const curShowLoginPanel = useSelector( state => state.curShowLoginPanel );
    const dispatch = useDispatch();

    let LP_fetchToServer = () => {
      alert("!");
      let xx = fetch('https://cab07.000webhostapp.com/index.php')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(data.age);
      });  
    }

    return (
        <div className = {"LoginPage LPop"+curShowLoginPanel}>               
                     <input 
                       type="text" 
                      id="login" 
                        className="fadeIn second" 
                        name="login" 
                        placeholder="Ваш логін"/>
                    <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="Ваш пароль" />
                    <input 
                        type="submit" 
                        className="fadeIn fourth LPsubmit" 
                        value="Log In"
                        // onClick = {() => dispatch({
                        //     type : "SWITCH_LOGIN_PANEL",
                        //     newState : 0                    
                        // })}
                        onClick = {() => LP_fetchToServer()}/>               
        </div>
    )
}

export default LoginPage;
import React, { useState } from 'react';
import "./LoginPage.css";

import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';

const LoginPage = () =>{
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const curShowLoginPanel = useSelector( state => state.curShowLoginPanel );
    const dispatch = useDispatch();

    let LP_fetchToServer = () => {       
      fetch('https://cab07.000webhostapp.com/sql_login.php?login='+login+'&pass='+pass)     
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if ( data.userId >0 ) {
            dispatch({
              type : "SYSTEM_LOG_IN",              
              curUserId : data.userId/1              
          })
        }
        else {
          alert ("Не правільны логін або пароль!");
          dispatch({
            type :"LOGIN_PANEL_SWITCHER",
            newCurShowLoginPanel : 0
          });   
       }      
      });
     };
    let closeButHandler = () => {      
      dispatch({
        type :"LOGIN_PANEL_SWITCHER",
        newCurShowLoginPanel : 0
      });       
   
    }
    return (
        <div className = {"LoginPage LPop"+curShowLoginPanel}>               
                     <input 
                       type="text" 
                      id="login" 
                        className="fadeIn second" 
                        name="login" 
                        placeholder="Ваш логін"
                        onChange={(e)=>setLogin(e.target.value)}/>
                    <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="Ваш пароль" 
                        onChange={(e)=>setPass(e.target.value)}/>
                    <input 
                        type="submit" 
                        className="fadeIn fourth LPsubmit" 
                        value="Log In"                        
                        onClick = {() => LP_fetchToServer()}/>        
                    <button 
                        className = "LoginPage_close"
                        onClick = {() => closeButHandler() }>X</button>       
        </div>
    )
}

export default LoginPage;
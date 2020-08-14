import React, { useState, useEffect} from 'react';
import "./LoginPage.css";

import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';

const LoginPage = () =>{
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const curShowLoginPanel = useSelector( state => state.curShowLoginPanel );
    const dispatch = useDispatch();

    let LP_fetchToServer = () => {       
      fetch('http://82.209.229.159/sql_login.php?login='+login+'&pass='+pass)     
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if ( data.userId >0 ) {
            dispatch({
              type : "SWITCH_LOGIN_PANEL",
              newState : 0,
              userId : data.userId/1,
              newLoginButText : "Кабiнет"
          })
        }
        else {
          alert ("Памылка");
          dispatch({
            type : "SWITCH_LOGIN_PANEL",
            newState : 0,
            userId : -1,
            newLoginButText : "Уваход"    
        });
       }      
      });
     };
    let closeButHandler = () => {
      
      dispatch({
        type : "SWITCH_LOGIN_PANEL",
        newState : 0           
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
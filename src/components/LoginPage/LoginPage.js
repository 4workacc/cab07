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
      // fetch('https://cab07.000webhostapp.com/login.php?login='+login+'&pass='+pass)
      fetch('http://cab07.hostronavt.ru/login.php?login='+login+'&pass='+pass)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if ( data.userId >0 ) {
            dispatch({
              type : "SWITCH_LOGIN_PANEL",
              newState : 0,
              userId : data.userId,
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
        </div>
    )
}

export default LoginPage;
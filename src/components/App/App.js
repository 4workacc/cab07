import React, { useState, useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import LoginPage from '../Pages/LoginPage/LoginPage';
import MainPage  from '../Pages/MainPage/MainPage';

const App = () => {  
  const statePage = useSelector( state => state.curPage );
  const [ curPage, switchPage ] = useState('');
  const dispatch = useDispatch();
  
  useEffect (() => {
    switch ( statePage ) {
      case "LoginPage" : switchPage(<LoginPage />); break;
      case "MainPage"  : switchPage(<MainPage />); break;
    }
  }, [statePage])
  useEffect (() => {
    fetch('https://cab07.000webhostapp.com/sql_getTestsList.php')
    .then((response) => {
        return response.json();
    })
    .then((data) => {     
            dispatch({
              type : "LOAD_TEST_LIST",
              testList : data.tests
            })                                                     
        }) 
  },[]);
  return (
    <div className="App">   
      { curPage }
    </div>
  );
}

export default App;

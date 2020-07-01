import React from 'react';
import './App.css';

import MainPage from '../MainPage/MainPage';
import LoginPage from '../LoginPage/LoginPage';

import { connect } from 'react-redux';
class App extends React.Component {
  constructor ( props ) {
    super ( props );
    this.state = {
      curPage : <LoginPage/>
    }   
  }
  static getDerivedStateFromProps(nextProps, state) {
    let curComp = <LoginPage />;
    if (nextProps.curId === -1 ) {      
      curComp = <LoginPage />;
    }
    else {
      curComp = <MainPage />;
    }
    return {
      ...state,
      curPage : curComp
    };
  }
   
  render() {
    return (
      <div className = "App">
        { this.state.curPage }
      </div>
    )
  } 
}
let mapState = state =>{
  return {
    curId : state.curUserId
  }   
}

export default connect(mapState) (App);

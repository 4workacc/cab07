import React from 'react';
import './App.css';

import MainPage from '../MainPage/MainPage';
import LoginPage from '../LoginPage/LoginPage';

import { connect } from 'react-redux';
class App extends React.Component {
  constructor ( props ) {
    super ( props );
    this.state = {
      curPage : <MainPage />,
      curSubPage : "none"
    }   
  }
  static getDerivedStateFromProps(nextProps, state) {
    let curPage = <MainPage />;
    let curSubPage = "none";
    switch ( nextProps.curPage ) {
      case "LoginPage" : curPage = <LoginPage />; break;
      case "MainPage"  : curPage = <MainPage />; break;
      default : curPage = <MainPage />
    } 
    switch ( nextProps.curSubPage ) {
      default : curSubPage = "none"
    }
    return {
      ...state,
      curPage : curPage,
      curSubPage : curSubPage
    };
  }
   
  render() {
    return (
      <div className = "App">
        { this.state.curPage }
        {/* { this.state.curSubPage } */}
      </div>
    )
  } 
}
let mapState = state =>{
  return {
    curId : state.curUserId,
    curPage : state.curPage,
    curSubPage : state.curSubPage
  }   
}

export default connect(mapState) (App);

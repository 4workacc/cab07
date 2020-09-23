import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useDispatch } from 'react-redux'; 

import MP_Menu from './MP_Menu/MP_Menu';
import MP_Games from './MP_Games/MP_Games';
import MP_Napr from './MP_Napr/MP_Napr';
import MP_Anims from './MP_Anims/MP_Anims';
import MP_Tests from './MP_Tests/MP_Tests';
import MP_Tvor from './MP_Tvor/MP_Tvor';
import MP_Strat from './MP_Strat/MP_Strat';
import MP_Misl from './MP_Misl/MP_Misl';

//tests
import Test0 from '../readyPages/tests/test0/test0';
import Test1 from '../readyPages/tests/Test1/Test1';
import Test2 from '../readyPages/tests/Test2/Test2';
// anims
import Anim0 from '../readyPages/anims/Anim0/Anim0';
// portal
import MPortal from '../Portal/MPortal';
import LoginPage from '../LoginPage/LoginPage';

import { useSelector } from 'react-redux';
import Cabinet from '../Cabinet/CabinetMaterial';
import AdminPanel from '../AdminPanel/AdminPanelMaterial';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginBut : {
      color: "white",
      '&:hover': {
        color: "red",
        backgroundColor: "darkblue"
      }
  }
  
}));

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
    const [curPage, setPage] = useState();
    
    // const count = useSelector(state => state.counter.count);
    const curUserId = useSelector( state => state.curUserId );
    const curMenuPage = useSelector ( state => state.curMenuPage);
    const curLoginButText = useSelector( state => state.curLoginButText);
    const curUserTask = useSelector( state => state.curUserTask);
    
    const curShowLoginPanel = useSelector( state => state.curShowLoginPanel);
    useEffect(() => {
        document.title = "Вугалок беларускай мовы"
     }, []);
    useEffect(() => {
        let qq = <MP_Menu />;
        switch ( curMenuPage ) {
            case "MP_Menu" : qq = <MP_Menu />; break;
            case "MP_Napr"  : qq = <MP_Napr />; break;
            case "MP_Games"  : qq = <MP_Games />;break;
            case "MP_Anims"   : qq = <MP_Anims />; break;
            case "MP_Tests" : qq =<MP_Tests />; break;
            case "MP_Tvor" :  qq = <MP_Tvor />; break;
            case "MP_Strat" : qq = <MP_Strat />; break;
            case "MP_Misl" : qq = <MP_Misl />; break;

            case "Cabinet" : qq = <Cabinet />; break;
            case "AdminPanel" : qq = <AdminPanel />; break;

            case "TEST_test0" : qq = <Test0 />; break;
            case "TEST_test1" : qq = <Test1 />; break;
            case "TEST_test2" : qq = <Test2 />; break;

            case "ANIM_anim0" : qq =<Anim0 />;break;
            default : qq = <MP_Menu />;
        }
        setPage( qq );
    }, [curMenuPage]);
    let loginButHandler = () =>{       
        switch ( curUserId ) {
            case -1 :
                dispatch({
                    type : "ROUTE_TO_PAGE",
                    pageName : "LoginPage"
                });
                break;
            case 12311 : 
                dispatch({
                    type : "SHOW_PAGE",
                    page : "AdminPanel"
                });
                break;     
            default :
                dispatch({
                    type : "SHOW_PAGE",
                    page : "Cabinet"
                });   
                break;            
        }            
    }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
             <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Menu"
            }) } >Галоўнае меню</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Napr"
            }) }>Напрацоўкі</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Games"
            }) }>Гульні</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Anims"
            }) }>Анімацыі</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Tests"
            }) }>Тэсты</Button>
            <Button
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Tvor"
            }) }>Творчасць</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Strat"
            }) }>Стратэгія</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_PAGE",
                page : "MP_Misl"
            }) }>Мысленне</Button> 
          </Typography>
          <Button 
            color="inherit"            
            onClick = {()=>loginButHandler()}>
                {curLoginButText}</Button>
        </Toolbar>
      </AppBar>
      <div className = "MPmain">
            { curPage }            
        </div>
          
    </div>
  );
}

export default MainPage;
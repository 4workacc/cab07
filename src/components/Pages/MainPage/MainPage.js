import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';

import { useDispatch, useSelector } from 'react-redux'; 

import Menu from '../../Cards/Menu';
import Games from '../../Cards/Games';
import Naprs from '../../Cards/Napr';
import Anims from '../../Cards/Anims';
import Tests from '../../Cards/Tests';
import Tvors from '../../Cards/Tvors';
import Strats from '../../Cards/Strats';
import Misls from '../../Cards/Misls';

// //tests
// import Test0 from '../readyPages/tests/test0/test0';
// import Test1 from '../readyPages/tests/Test1/Test1';
// import Test2 from '../readyPages/tests/Test2/Test2';
// // anims
// import Anim0 from '../readyPages/anims/Anim0/Anim0';
// // portal
// import MPortal from '../Portal/MPortal';
// import LoginPage from '../LoginPage/LoginPage';

// import Cabinet from '../Cabinet/CabinetMaterial';
// import AdminPanel from '../AdminPanel/AdminPanelMaterial';

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
  },
  MPmain : {
    marginTop: "-390px",    
    position : "absolute",
    left: "50%",
    top: "50%",
    marginLeft: "-500px", 
    width: "1000px",
    height: "700px"
  }
  
}));

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const curLoginButText = useSelector( state => state.curLoginButText );
  const stateCard = useSelector( state => state.curCard );

  const [curCard, setCurCard ] = useState( stateCard );

  let MP_loginButHandler = () => {
        switch ( curLoginButText ) {
            case "Enter" : {
                dispatch({
                    type : "GO_TO_LOGIN"
                });
                break;
            }
            case "CABINET" : {
                dispatch({
                    type : "GO_TO_CABINET"
                });
                break;
            };
            case "AdminPanel" : {
                dispatch({
                    type : "GO_TO_ADMINPANEL"
                });
                break;
            };
        }        
  };
  useEffect(()=>{    
    setCurCard( stateCard )
  }, [stateCard]);
  useEffect(() =>{
      setCurCard( <Menu />)
  },[]);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
             <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_CARD",
                card : <Menu />
            }) } >Галоўнае меню</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_CARD",
                card : <Naprs />
            }) }>Напрацоўкі</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_CARD",
                card : <Games />
            }) }>Гульні</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                    type : "SHOW_CARD",
                    card : <Anims />
            }) }>Анімацыі</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_CARD",
                card : <Tests />
            }) }>Тэсты</Button>
            <Button
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_CARD",
                card : <Tvors />
            }) }>Творчасць</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_CARD",
                card : <Strats />
            }) }>Стратэгія</Button>
            <Button 
                className = { classes.loginBut }
                onClick = { () => dispatch({
                type : "SHOW_CARD",
                card : <Misls />
            }) }>Мысленне</Button> 
          </Typography>
          <Button 
            color="inherit"            
            onClick = {()=>MP_loginButHandler()}>
                {curLoginButText}</Button>
        </Toolbar>
      </AppBar>
      <div className = { classes.MPmain}>        
            { curCard }
      </div>          
    </div>
  );
}

export default MainPage;
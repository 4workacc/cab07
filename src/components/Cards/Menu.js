import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import MenuCard from './Card';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    MP_Menu : {                  
        width: "1000px",
        height: "700px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },  
}));
const CardMenu = [
    <MenuCard data =  {{title: "aq", text: "asdasd"} } />,
    <MenuCard  data = {{title: "aq1", text: "asdasd"} }/>,
    <MenuCard  data = {{title: "aq2", text: "asdasd"} }/>,
    <MenuCard  data = {{title: "aq3", text: "asdasd"} }/>,
    <MenuCard  data = {{title: "aq4", text: "asdasd"} }/>,
    <MenuCard  data = {{title: "aq5", text: "asdasd"} }/>,
    <MenuCard  data = {{title: "aq6", text: "asdasd"} }/>
]
const Menu = () => {    
    const classes = useStyles();    
    const [ curIndex, changeIndex ] = useState(0);
    const [ curMenuSet, switchMenuSet ] = useState([]);
    useEffect(()=>{
        switchMenuSet([ CardMenu[ curIndex ], CardMenu[ curIndex+1 ], CardMenu[ curIndex+2 ], CardMenu[ curIndex+3 ],])
    },[])
    return (
        <div className = {classes.MP_Menu}>  
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <ArrowBackIcon fontSize="normal" />
        </IconButton>  
                { curMenuSet }
            <IconButton aria-label="delete" className={classes.margin} size="small">
          <ArrowForwardIcon fontSize="normal" />
        </IconButton>
        </div>
    )
}

export default Menu;
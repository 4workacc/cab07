import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    MP_Strats : {        
        border: "1px solid red",              
        width: "1000px",
        height: "700px"
    },
}));
const Strats = () => {
    const classes = useStyles();
    return (
        <div className = {classes.MP_Strats}>
            MP_Strats
        </div>
    )
}

export default Strats;
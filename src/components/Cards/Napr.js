import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MP_Napr : {        
        border: "1px solid red",              
        width: "1000px",
        height: "700px"
    },
}));
const Naprs = () => {
    const classes = useStyles();
    return (
        <div className = {classes.MP_Napr}>
            Napr
        </div>
    )
}

export default Naprs;
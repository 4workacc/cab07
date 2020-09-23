import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    MP_Misls : {        
        border: "1px solid red",              
        width: "1000px",
        height: "700px"
    },
}));
const Misls = () => {
    const classes = useStyles();
    return (
        <div className = {classes.MP_Misls}>
            MP_Misls
        </div>
    )
}

export default Misls;
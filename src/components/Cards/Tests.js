import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    MP_Tests : {        
        border: "1px solid red",              
        width: "1000px",
        height: "700px"
    },
}));
const Tests = () => {
    const classes = useStyles();
    return (
        <div className = {classes.MP_Tests}>
            Tests
        </div>
    )
}

export default Tests;
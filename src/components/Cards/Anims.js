import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    MP_Anim : {        
        border: "1px solid red",              
        width: "1000px",
        height: "700px"
    },
}));
const Anims = () => {
    const classes = useStyles();
    return (
        <div className = {classes.MP_Anim}>
            Anims
        </div>
    )
}

export default Anims;
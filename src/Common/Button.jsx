import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button:{
        textTransform:"capitalize",
        padding:theme.spacing(2),
        margin:theme.spacing(2),
        fontSize:15,
        fontWeight:600,
    }
}));


const ButtonComponent = ({variant,color,children,fullWidth,styles,onClick,disabled}) => {
    const classes = useStyles();
    return ( 
        <div>
            <Button
                className={classes.button}
                disabled={disabled || false}
                variant={variant}
                color={color}
                fullWidth={false || fullWidth }
                style={styles}
                onClick={onClick}>
                {children}
            </Button>
        </div>
     );
}
 
export default ButtonComponent;
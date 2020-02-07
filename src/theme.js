import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const theme = createMuiTheme({
    palette:{
        //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        primary:{
            //main:"#bf360c",
            main:"#1C86EE",
            light:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            //main:"#c62828",
            //main:"#fe4a49"
            //main:"#2962ff",
        },
        secondary:{
            // main:"#ffffff",
            //main:"#585858",
            main:"#EF4036",	
            //light:"#E0E0E0"
            light:"#98a3af"
            //main:"#2ab7ca"
            //main:"#c62828",
        },
    },
    typography:{
        // fontFamily:"'Lato', sans-serif",
        fontFamily:" 'Montserrat', sans-serif",

    },
    spacing: 5,
    shape:{
        borderRadius:5,
    },
    props:{
        MuiButtonBase:{
            disableRipple:true,
        }
    },
})

export default theme;

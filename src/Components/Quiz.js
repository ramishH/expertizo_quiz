import React,{useState,useEffect} from 'react';
import { Grid, Typography,Hidden,Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import data from '../Data/questions.json'
import ReactStars from 'react-stars'
import ButtonComponent from '../Common/Button'


const useStyles = makeStyles(theme => ({
   score:{
       width:"70%",
   },
   center:{
        padding:theme.spacing(5),
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform:'translate(-50%, -50%)',
        width: '50%',
        height: '80vh',
        [theme.breakpoints.down('sm')]: {
            width:'90%',
            height:'75%'
        },
        borderRadius:theme.spacing(3)
    },
    cent:{
        marginTop:theme.spacing(5),
        textAlign:'center'
    }
}));
  


const Quiz = () => {
    const classes=useStyles();
    const [index,setIndex]=useState(0)
    const [answer,setAnswer]=useState(null)
    const [perc,setPerc]=useState()
    const [correct,setCorrect]=useState([])
    const [incorrect,setIncorrect]=useState([])
    const [corr,setCorr]=useState()
    const [rem,setRem]=useState()
    const [wrong,setWrong]=useState()

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    const handleNext=(index,func,value)=>{
        var temp=[]
        if(value==='correct'){
            temp=correct;
            temp.push(index)
            setCorrect(temp)
        }
        else if(value==='incorrect'){
            temp=incorrect
            temp.push(index)
            setIncorrect(temp)
        }
        console.log(correct)
        console.log(incorrect)
        setAnswer(null);
        setIndex(index+1)
    }

    useEffect(()=>{
        var per=(index/data.length)*100  
        setPerc(per)

        var tem=(correct.length/(index+1))*100
        setCorr(tem)

        var tem1=(((data.length-(index+1))+(correct.length+1))/data.length)*100
        setRem(tem1)

        var tem2=((data.length-(correct.length))/data.length)*100
        setWrong(tem2)
    },[index])

    return ( 
        <div> 
            <div style={{height:20,width:`${perc}%`,backgroundColor:'lightgrey',marginBottom:10}}/>
            <div className={classes.center}>
            <Typography>Question {index+1} of {data.length}</Typography> 
            <Typography variant="caption">{decodeURIComponent(data[index].category)}</Typography>
            <ReactStars
                count={5}
                value={data[index].difficulty==='easy'?1:data[index].difficulty==='medium'?2:data[index].difficulty==='hard'?3:""}
                size={24}
                color2={'#ffd700'} 
            />
            <Typography>{decodeURIComponent(data[index].question)}</Typography>
            <Grid container>
                <Grid container xs={6}> 
                    <ButtonComponent styles={{marginLeft:0,width:200}} variant="contained" onClick={()=>{setAnswer(data[index].correct_answer)}} color="primary">{decodeURIComponent(data[index].correct_answer)}</ButtonComponent>
                </Grid>
                <Grid container xs={6}> 
                    <ButtonComponent styles={{marginLeft:0,width:200}} variant="contained" onClick={()=>{setAnswer(data[index].incorrect_answers[0])}} color="primary">{decodeURIComponent(data[index].incorrect_answers[0])}</ButtonComponent>
                </Grid>
                <Grid container xs={6}> 
                    {data[index].incorrect_answers[1] && <ButtonComponent styles={{marginLeft:0,width:200}} variant="contained" onClick={()=>{setAnswer(data[index].incorrect_answers[1])}}color="primary">{decodeURIComponent(data[index].incorrect_answers[1])}</ButtonComponent>}
                </Grid>
                <Grid container xs={6}> 
                    {data[index].incorrect_answers[2] && <ButtonComponent styles={{marginLeft:0,width:200}} variant="contained" onClick={()=>{setAnswer(data[index].incorrect_answers[2])}} color="primary">{decodeURIComponent(data[index].incorrect_answers[2])}</ButtonComponent>}
                </Grid>
            </Grid>
            {answer===data[index].correct_answer? 
                <div><Typography className={classes.cent}>Correct!</Typography><br/>
                    <Grid container justify="center">
                        {(index+1)===data.length?<ButtonComponent variant="contained" color="primary" styles={{margin:0}} onClick={()=>window.location.reload(true)}>Restart</ButtonComponent> :<ButtonComponent variant="contained" color="primary" styles={{margin:0}} onClick={()=>handleNext(index,setCorrect,'correct')}>Next Question</ButtonComponent>}
                    </Grid>
                </div>
                :answer===null?"":
                <div><Typography className={classes.cent}>Incorrect!</Typography><br/>
                    <Grid container justify="center">
                        {(index+1)===data.length?<ButtonComponent variant="contained" color="primary" styles={{margin:0}} onClick={()=>window.location.reload(true)}>Restart</ButtonComponent>:<ButtonComponent variant="contained" color="primary" styles={{margin:0}} onClick={()=>handleNext(index,setIncorrect,'incorrect')}>Next Question</ButtonComponent>}
                    </Grid>
                </div>
            }
            <Typography>Lowest Possible Score: {wrong}%</Typography>
            <div style={{border:"1px solid black",borderRadius:4,height:50}}>
                <div style={{backgroundColor:"black",width:`${wrong}%`,height:50}}/> 
            </div>
            <Typography>Score: {corr}%</Typography>
            <div style={{border:"1px solid black",borderRadius:4,height:50}}>
                <div style={{backgroundColor:"grey",width:`${corr}%`,height:50}}/>
            </div>
            <Typography>Max Score: {rem}%</Typography>
            <div style={{border:"1px solid black",borderRadius:4,height:50}}>
                <div style={{backgroundColor:"lightgrey",width:`${rem}%`,height:50}}/>
            </div>

            </div>
        </div>
     );
}
 
export default Quiz;
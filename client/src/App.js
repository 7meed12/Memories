import React , {useState,useEffect} from "react";
import {Container , AppBar , Typography , Grow , Grid} from "@material-ui/core"
import memories from "./imgs/memories.png"
import Form from'./components/Form/Form'
import Posts from'./components/Posts/Posts'
import {getPosts} from './actions/posts'
import {useDispatch} from 'react-redux'
import useStyles from './styles'


const App = () => {
    const [currentId, setCurrentId] = useState(0);
    console.log('currentId',currentId)
    const classes = useStyles()
    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(getPosts())
    },[currentId,Dispatch])
   return (<Container maxWidth="lg">
        <AppBar position="static" color="inherit" className={classes.appBar}>
            <Typography className={classes.heading} variant="h2" align="center"> Memories</Typography>
            <img  className={classes.image} src={memories} alt="memories" height="60px "/>
        </AppBar>
        <Grow in>
                <Container>
                    <Grid container justifyContent="space-between"
                    alignItems="stretch" spacing={3} className={classes.mainContainer}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
   </Container>)
       
   

}
export default App;
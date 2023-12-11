import React from 'react'
import { Container, TextField, CssBaseline } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';
// import { IconButton } from '@material-ui/core';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const style = makeStyles((theme) =>({
    con:{
        marginTop: '200px',
        border: '2px solid',
        backgroundColor: 'white',
        borderRadius: '10px',
        height: '500px',
    },
    cont:{
        width: '500px',
        marginTop: '100px',
        marginLeft: '200px',

    },
    te:{
        width: '500px',

    },
    btn:{
        backgroundColor: 'blue',
        padding: '20px',
        marginTop: '10px',
        

    }


}))

  
  
function Tudoapp() {
    const classes = style();
    
      
  return (
    <>
        <CssBaseline>
            <Container className={classes.con}>
                <div className={classes.cont}>
                    <TextField id="outlined-basic" label="Enter the list ***" variant="outlined"  className={classes.te}/>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </div>
                
            </Container>
        </CssBaseline>
    </>
  )
}

export default Tudoapp;
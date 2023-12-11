import React from 'react'
import { Container, TextField, CssBaseline } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import mystyle from '@material-ui/core/styles'

const style = mystyle((theme) =>({
    con:{
        marginTop: '200px',
    }
}))
function Tudoapp() {
    const classes = style();
  return (
    <>
        <CssBaseline>
            <Container className='{classes. con}'>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" margin-top='200px' />
                <SearchIcon />
            </Container>
        </CssBaseline>
    </>
  )
}

export default Tudoapp;
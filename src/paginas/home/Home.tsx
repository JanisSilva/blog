import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material'
import './Home2.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid >
                    <Box className='cropped'>
                    <img src="https://i.pinimg.com/originals/6d/0d/1f/6d0d1fd4e4a8fa70b53afb0714b5b1a4.png" alt="" width="1540" height="auto" />
                    </Box>
                </Grid>
                <Grid xs={12} className='postagensFundo'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
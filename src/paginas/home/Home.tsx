import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/material'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Home.css';


function Home() {

    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    

    useEffect(() => {
        if (token === "") {
            history("/")

        }
    }, [token])


    return (
        <>
        <Box >
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid >
                    <Box className='cropped'>
                    </Box>
                </Grid>
                
                <Grid xs={12} className='postagensFundo' >
                    <TabPostagem />
                </Grid>
            </Grid>
            </Box>
        </>
    );
}
export default Home;
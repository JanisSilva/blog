import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/material'
import './Home2.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {

    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/")

        }
    }, [token])


    return (
        <>
        <Box >
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid >
                    <Box className='cropped'>
                        <img src="https://wallpaperaccess.com/full/2810144.png" alt="" width="1540" height="auto" />
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
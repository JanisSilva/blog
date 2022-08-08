import React, { useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material'
import './Home2.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');

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
                        <img src="https://i.pinimg.com/originals/6d/0d/1f/6d0d1fd4e4a8fa70b53afb0714b5b1a4.png" alt="" width="1540" height="auto" />
                    </Box>
                </Grid>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                        <ModalPostagem />
                    </Box>
                    
                </Box>


                <Grid xs={12} className='postagensFundo'>
                    <TabPostagem />
                </Grid>
            </Grid>
            </Box>
        </>
    );
}
export default Home;
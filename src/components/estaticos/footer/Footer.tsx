import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material'
import './Footer2.css'


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" >
                            <Typography align="center" gutterBottom className='textomin'>Redes sociais:</Typography>
                        </Box>
                            <Box display="flex" className='redesbox' >
                                <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                    <FacebookIcon className='redes ' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes' />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redes' />
                                </a>
                            </Box>
                    </Box>
                    <Box className='box2'>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
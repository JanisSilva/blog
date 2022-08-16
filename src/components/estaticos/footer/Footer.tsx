import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Footer.css'


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;

      if(token != ""){
        footerComponent = 
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" >
                    <Typography align="center" gutterBottom className='textomin'>Redes sociais:</Typography>
                </Box>
                    <Box display="flex" className='redesbox' paddingLeft={6}>

                        <a href="https://www.instagram.com/jan_s__/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/janis-silva/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
            </Box>
            <Box className='box2'>
                <Box>
                    <a target="_blank" href="https://www.behance.net/janissilva" className='text-decorator-none'>
                        <Typography variant="subtitle2" gutterBottom className='textos' align="center">behance.net/janissilva</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
      }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, TextField, Button, Card, CardContent } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import './SobreNos.css';

function SobreNos() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  return (

    <Grid className='backgroundSobreNos'>

     

        <Box className='cardSobreNosTitulo'>
          <Typography className='tituloCardSobreNos'>Sobre nós</Typography>
        </Box>


        <Grid className='boxConteudo'>
          <Box>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEh8Wyx6WI7qA/profile-displayphoto-shrink_800_800/0/1654045375745?e=1665014400&v=beta&t=LIgyK4SzVKo-RrVTcCtJhiGwzyLXKGU2F423L8jvzMU"
              alt="Foto de perfil Janis"
              className='avatar'/>
          </Box>

          <Box >
            <Card variant="outlined" className='cardSobreNos'>
              <CardContent>
                <Typography className='textoSobreNos'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et!
                  Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit!
                  </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      
        <Grid className='boxConteudoReverso'>
          <Box>
            <img src="https://pbs.twimg.com/profile_images/1306342719703441410/4YXmIvpE_400x400.jpg"
              alt="Foto de perfil Ghibli"
              className='avatarReverso'/>
          </Box>

          <Box >
            <Card variant="outlined" className='cardSobreNos'>
              <CardContent>
                <Typography className='textoSobreNos'>Studio Ghibli Inc. (株式会社スタジオジブリ Kabushiki-gaisha Sutajio Jiburi) 
                é estúdio de cinema de animação japonês com sede em Koganei, Tóquio. 
                O estúdio é mais conhecido por seus filmes de animação e também produziu vários curtas, 
                comerciais de televisão e um filme de televisão. Foi fundado em 15 de junho de 1985 pelos diretores Hayao Miyazaki e Isao Takahata 
                e pelo produtor Toshio Suzuki.
                  </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      

    </Grid>
  )
}

export default SobreNos;
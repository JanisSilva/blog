
import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
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
            className='avatar' />
        </Box>

        <Box >
          <Card variant="outlined" className='cardSobreNos'>
            <CardContent>
              <Typography className='textoSobreNos'>Olá, me chamo Janis, sou formada em técnico em Comunicação Visual e cursando Design gráfico.
                Atualmente estou finalizando o bootcamp de Full Stack Java pela Generation Brasil, com grande interesse em estender meus conhecimentos
                para o front-end e para estreiar meu primeiro blog, escolhi a temática inspirada nos filmes e cores do Studio Ghibli.
                Este blog foi feito para posts de pequenas notas. Aproveite!

              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      <Grid className='boxConteudoReverso'>
        <Box>
          <img src="https://pbs.twimg.com/profile_images/1306342719703441410/4YXmIvpE_400x400.jpg"
            alt="Foto de perfil Ghibli"
            className='avatarReverso' />
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
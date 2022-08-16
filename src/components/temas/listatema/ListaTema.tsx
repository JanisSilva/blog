import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete'
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';
import './ListaTema.css';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);
  let history = useNavigate();

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'light',
        progress: undefined,
        });
      history("/")
    }
  }, [token])

  async function getTemas() {
    await busca("/tema/all", setTemas, {
      headers: { 'Authorization': token }
    })
  }

  useEffect(() => {
    getTemas()
  }, [temas.length])

  return (
    <>
      <Box className='background-temas'>
        {
          temas.map(tema => (
            <Box m={2} >
              <Card variant="outlined" className='card-tema'>
                <CardContent>
                  <Typography gutterBottom  className='boxSuperior-tema'>
                    Tema
                  </Typography>
                  <Typography className='texto-tema'>
                    {tema.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={0}>
                  <Button variant="contained" className='botaoAtualizar-tema' disableElevation>
                    atualizar
                  </Button>
                  </Box>
                    </Link>
                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                      <Box mx={0}>
                        <Button variant="contained" className='botaoDelete-tema'disableElevation>
                          <DeleteIcon />
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          ))}
      </Box>
    </>
  );
}


export default ListaTema;
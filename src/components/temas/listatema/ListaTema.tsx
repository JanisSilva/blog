import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete'
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useNavigate();

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado')
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
                  <Button variant="contained" className='botaoAtualizar-tema' >
                    atualizar
                  </Button>
                  </Box>
                    </Link>
                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                      <Box mx={0}>
                        <Button variant="contained" className='botaoDelete-tema'>
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
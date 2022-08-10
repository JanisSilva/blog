import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Box} from '@mui/material';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import './ListaPostagem2.css';
import useLocalStorage from 'react-use-localstorage';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens/all", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
    <Box className='background'>
    {
        posts.map(post => (
      <Box m={3}>
        <Card variant="outlined" className='card'>
          <CardContent>
            <Typography gutterBottom className='boxSuperior'>
            {post.tema?.descricao}
            </Typography>
            <Typography variant="h6" component="h2" className='boxTexto'>
            {post.titulo}
            </Typography>
            <Typography variant="body2" component="p"className='boxTexto'>
            {post.texto}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex">
              <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                <Box >
                  <Button variant="contained" className='botaoAtualizar' disableElevation>
                  atualizar
                  </Button>
                </Box>
              </Link>

              <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                <Box >
                  <Button variant="contained" className='botaoDelete' disableElevation>
                    <DeleteIcon/>
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
         ))
        }
        </Box>
    </>)
}

export default ListaPostagem;
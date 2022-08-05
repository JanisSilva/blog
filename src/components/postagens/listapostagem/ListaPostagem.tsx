import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Box} from '@mui/material';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import './ListaPostagem2.css';
import useLocalStorage from 'react-use-localstorage';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
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
    {
        posts.map(post => (
      <Box m={3}>
        <Card variant="outlined" >
          <CardContent>
            <Typography gutterBottom className='boxSuperior'>
            {post.tema?.descricao}
            </Typography>
            <Typography variant="h6" component="h2">
            {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
            {post.texto}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1}>
              <Link to="" className="text-decorator-none" >
                <Box mx={0}>
                  <Button variant="contained" className='botaoAtualizar' >
                    atualizar
                  </Button>
                </Box>
              </Link>


              <Link to="" className="text-decorator-none">
                <Box mx={0}>
                  <Button variant="contained" className='botaoDelete'>
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
    </>)
}

export default ListaPostagem;
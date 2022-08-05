import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import {Box} from '@mui/material';
import './ListaPostagem2.css';

function ListaPostagem() {

  return (
    <>
      <Box m={3}>
        <Card variant="outlined" >
          <CardContent>
            <Typography gutterBottom className='boxSuperior'>
              Tema
            </Typography>
            <Typography variant="h6" component="h2">
              Título
            </Typography>
            <Typography variant="body2" component="p">
              Descrição da Postagem
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
    </>)
}

export default ListaPostagem;
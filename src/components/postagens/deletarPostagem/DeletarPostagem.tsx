import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import {Box} from '@mui/material'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';

function DeletarPostagem() {
    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [post, setPosts] = useState<Postagem>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );

    useEffect(() => {
        if (token == "") {
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

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history('/postagens')
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Postagem deletada com sucesso!', {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: 'light',
              progress: undefined,
              });
          }
        
          function nao() {
            history('/postagens')
          }
  return (
    <>
    <Box className='background'>
      <Box m={3} >
        <Card variant="outlined" className='cardDelete' >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom className='boxSuperiorDelete'>
                Deletar a postagem?
              </Typography>
              <Typography className='textoDelete' >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions >
            <Box display="flex" justifyContent="start" ml={0} mb={0} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="botaoSim" disableElevation>
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="contained" className='botaoNao'disableElevation>
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
      </Box>
    </>
  );
}
export default DeletarPostagem;
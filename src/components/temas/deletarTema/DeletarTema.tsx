import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';
import './DeletarTema.css';



function DeletarTema() {
    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );
    const [temas, setTemas] = useState<Tema>()

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTemas, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history('/tema')
            deleteId(`/tema/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Tema deletado com sucesso!', {
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
            history('/tema')
          }
          
          return (
            <>
            <Box className='backgroundDeleteTema'>
              <Box m={2}>
                <Card variant="outlined" className='cardDeleteTema'>
                  <CardContent>
                    <Box justifyContent="center">
                      <Typography color="textSecondary" gutterBottom className='boxSuperiorDeleteTema'>
                        Deletar o Tema?
                      </Typography>
                      <Typography color="textSecondary" className='textoDeleteTema'>
                        {temas?.descricao}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="start" ml={0} mb={0} >
                      <Box mx={2}>
                        <Button onClick={sim} variant="contained" className="botaoSimTema" disableElevation>
                          Sim
                        </Button>
                      </Box>
                      <Box mx={2}>
                        <Button  onClick={nao} variant="contained" className='botaoNaoTema'disableElevation>
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
        export default DeletarTema;
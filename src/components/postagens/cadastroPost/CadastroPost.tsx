import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { Box } from '@mui/system';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';

function CadastroPost() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    useEffect(() => {
        if (token === "") {
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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/tema/all", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens/atualizar`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'light',
                progress: undefined,
                });
        } else {
            post(`/postagens/novo`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso!', {
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
        back()

    }

    function back() {
        history('/postagens')
    }

    return (
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background-cadastroPost' >
            <Grid alignItems='center' xs={6} className='box-cadastroPost'>
        <Container maxWidth="sm" className="topo" >
        <form onSubmit={onSubmit}>
        
            <Typography className='titulo-fontPost'>Novo Post</Typography>
            <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="dense" fullWidth />
            <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="Texto" multiline rows={4} defaultValue="Default Value" variant="outlined" name="texto" margin='normal' fullWidth />
            <FormControl >
                <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper"
                    onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, {
                        headers: {
                            'Authorization': token
                        }
                    })}>
                    {
                        temas.map(tema => (
                            <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                        ))
                    }
                </Select>
                <Box m={1} mx={10} >
                <FormHelperText >Escolha um tema!</FormHelperText>
                </Box>
                <Box>
                <Button type="submit" variant="contained" className='botaoPostar'>
                    Postar
                </Button>
                </Box>
            </FormControl>
        </form>
    </Container>
    </Grid>
    </Grid>
        </>
    );
}
export default CadastroPost;
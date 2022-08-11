import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';
import './CadastroUsuario.css';
import {toast} from 'react-toastify';

function CadastroUsuario() {
    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>
        ({
            id: 0,
            nome: '',
            foto: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        foto: '',
        usuario: '',
        senha: ''
    })

    useEffect(() => {
        if (userResult.id != 0) {
            history('/')
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso!', {
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
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
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
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='backgroundCadastro'>
            <Grid item xs={6} className='imagemCadastro'></Grid>
            <Grid item xs={4} alignItems='center' className='boxCadastro'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textxPrimary' component='h3' align='center' className='tituloCadastro'>Cadastro</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Email' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='Confirmarsenha' label='Confirmar senha' variant='outlined' name='Confirmarsenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                           
                                <Button type='submit' variant='contained' color='primary' className='botaoCadastro' disableElevation>
                                    Cadastrar
                                </Button>
                            
                            <Link to='/' className='text-decorator-none-cadastro'>
                                <Button variant='contained' color='secondary' className='botaoCancelar' disableElevation>
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );

}


export default CadastroUsuario;
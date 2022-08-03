import React, {ChangeEvent, useEffect, useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';
import './CadastroUsuario.css';

function CadastroUsuario(){
    let history = useNavigate();
    const [confirmarsenha, setConfirmarsenha] = useState<User>
    ({
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUseresult] = useState<User>({
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

        useEffect(()=>{
            if (userResult.id != 0) {
                history('/login')
            }
        }, [userResult])


        function confirmarSenhaHandle (e: ChangeEvent<HTMLFormElement>){
            setConfirmarsenha(e.target.value)
        }

        function updateModel (e: ChangeEvent<HTMLFormElement>){
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
        }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
            if (confirmarsenha = user.senha){
                cadastroUsuario(`/usuario/cadastrar`, user, setUseresult)
                alert('Usuario cadastrado com sucesso!')
            }else{
                alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
            }

    return(
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textxPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senhar} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='Confirmarsenha' label='Confirmar senha' variant='outlined' name='Confirmarsenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none2'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Link>
                            <Link to='/login' className='text-decorator-none2'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
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
}

export default CadastroUsuario;
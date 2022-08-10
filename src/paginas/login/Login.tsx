import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";


function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>
        ({
            id: 0,
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuario/logar`, userLogin, setToken)
            alert('Usuario logado com sucesso!')
        }

        catch (error) {
            alert('Dados do usuario inconsistentes. Erro ao logar!');
        }
    }
    return (
        <>
   <Grid container direction='row' justifyContent='center' alignItems='center' className='background-login'>
        <Grid alignItems='center' xs={6} className='box-login'>
            <Box paddingX={20} >
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textxPrimary' component='h3' align='center' className='titulo-login'>Acesso</Typography>
                    
                    <Box  >
                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='Email' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    </Box>
                    <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant='contained' className='botaoAtualizar-login' disableElevation>
                            Logar
                        </Button>
                    </Box>
                </form>

                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'style={{color: '#11503F'}}>Não tem uma conta?</Typography>
                    </Box>
                    <Box>
                        <Link to='/cadastrousuario' className="text-decorator-none">
                            <Box >
                                <Typography className='cursor '>
                                    Cadastre-se
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Grid>
    </Grid>
        </>
    );
}

export default Login;
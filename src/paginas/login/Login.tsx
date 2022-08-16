import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/actions";
import { toast } from 'react-toastify';


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
            toast.success('Conta logada com sucesso!', {
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

        catch (error) {
            toast.error('Dados inconsistentes. Favor verificar as informações de login.', {
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
        <Grid container direction='row'  alignItems='center' className='backgroundLogin' >
            <Grid xs={4} className='boxLogin'>
                <Box paddingX={8} >
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textxPrimary' component='h3' align='center' className='tituloLogin'>Acesso</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='Email' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' className='botaoLogin' disableElevation>
                                Logar
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{ color: '#11503F' }}>Não tem uma conta?</Typography>
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

            </Grid>
            
            <Grid container xs={6} direction='row' justifyContent='flex-start' alignItems='center' className='imagemLogin'
                ></Grid>
                
        </Grid>
    );
}

export default Login;
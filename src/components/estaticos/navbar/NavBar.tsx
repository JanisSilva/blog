import React from 'react';
import { Typography, Button, Toolbar, AppBar, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import './NavBar2.css'


    function NavBar() {
        const [token, setToken] = useLocalStorage('token');
        let history = useNavigate();


        function goLogout() {
            setToken('')
            alert("Usuário deslogado")
            history('/')
        }
  

    return (
        <div>
            <AppBar position="static" className='barras'>
                <Toolbar variant='dense'>
                    <Box>
                    <Link to='/home' className='text-decorator-none'>
                        <Box>
                            <Typography className='cursor' variant="h5" color='inherit' >
                                MYBLOG
                            </Typography>
                        </Box>
                    </Link>
                    </Box>

                    <Box>
                        <Typography className='cursor espaco'>
                            |
                        </Typography>
                    </Box>

                    <Box >
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} >
                                <Typography className='cursor espaco' color='inherit'>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box>
                        <Typography className='cursor'>
                            |
                        </Typography>
                    </Box>

                    <Box mx={1} >

                        <Link to='/postagens' className='text-decorator-none'>
                            <Box>
                                <Typography className='cursor espaco' color='inherit'>
                                    Postagem
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                    <Box>
                        <Typography className='cursor'>
                            |
                        </Typography>
                    </Box>

                    <Box mx={1} >
                        <Link to='/tema' className='text-decorator-none'>
                            <Box>
                                <Typography className='cursor espaco' color='inherit'>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box>
                        <Typography className='cursor'>
                            |
                        </Typography>
                    </Box>

                    <Box>
                        <Link to="/sobrenos" className='text-decorator-none'>
                            <Box mx={1} >
                                <Typography className='cursor espaco' color='inherit'>
                                    Sobre nós
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box >
                        <Link to='/' className='text-decorator-none'>
                            <Box mx={1} onClick={goLogout} className="botaoLog">
                                
                                    <Typography className='cursor'>
                                        | Logout
                                    </Typography>
                                
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
    }
    export default NavBar;
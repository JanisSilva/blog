import React from 'react';
import { Typography, Button, Toolbar, AppBar, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './NavBar2.css'
import { addToken } from '../../../store/tokens/actions';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';



function NavBar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        setToken('')
        alert("Usuário deslogado")
        history('/')
    }
    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className='barras'>
            <Toolbar variant='dense'>
                <Box>
                    <Link to='/home' className='text-decorator-none'>
                        <Box>
                            <Typography className='cursor espaco-logo' variant="h5" color='inherit' >
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
                <Box className='espaco-novoPost'>
                        <ModalPostagem />
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
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}
export default NavBar;

function setToken(arg0: string) {
    throw new Error('Function not implemented.');
}

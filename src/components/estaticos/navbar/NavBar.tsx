import React from 'react';
import { Typography, Button, Toolbar, AppBar, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar2.css'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className='barras'>
                <Toolbar variant='dense'>
                    <Box>
                        <Typography className='cursor' variant="h5" color='inherit' >
                            MYBLOG
                        </Typography>
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
                        <Typography className='cursor espaco' color='inherit'>
                        Postagem
                        </Typography>
                    </Box>

                    <Box>
                        <Typography className='cursor'>
                        |
                        </Typography>
                    </Box>

                    <Box mx={1} >
                        <Typography className='cursor espaco' color='inherit'>
                        Temas
                        </Typography>
                    </Box>

                    <Box>
                        <Typography className='cursor'>
                        |
                        </Typography>
                    </Box>

                    <Box mx={1} >
                        <Typography className='cursor espaco' color='inherit'>
                        Sobre nós
                        </Typography>
                    </Box>

                    <Box >
                        <Link to='/' className='text-decorator-none'>
                            <Box mx={1} >
                                <Button  className="botaoLog" href="/">
                                    <Typography className='cursor'>
                                        | Logout
                                    </Typography>
                                </Button>

                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </div>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css'
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
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <Box style={{ cursor: 'pointer' }}>
                        <Typography variant="h5" color='inherit' >
                            Blog pessoal
                        </Typography>
                    </Box>

                    <Box>
                        <Link to='/home' className='text-decorator.none'>
                            <Box mx={1} className='cursor'>
                                <Typography color='inherit'>
                                    home
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography color='inherit'>
                            postagem
                        </Typography>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography color='inherit'>
                            temas
                        </Typography>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography color='inherit'>
                            cadastrar tema
                        </Typography>
                    </Box>

                    <Box>
                        <Link to='/' className='text-decorator.none'>
                            <Box mx={1} className='cursor'>
                                <Typography color='inherit'>
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </div>
    );
}
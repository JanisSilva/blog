import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import { Link } from 'react-router-dom';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='barras2' >
        
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Box className='espaco-novoPost'>
              <ModalPostagem />
            </Box>
              <Box>
                <Link to='/postagens' className='text-decorator-none' >
                  <Tab className='botoesPost' label="Novas postagens" value="1" />
                </Link>
              </Box>

              <Box>
                <Link to="/formularioTema" className='text-decorator-none'>
                  <Tab className='botoesPost' label="Cadastre seu tema" value="2" />
                </Link>
              </Box>
          
          </Tabs>
        </AppBar>

        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">

        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
import React from 'react';
import NavBar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastrarUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import SobreNos from './paginas/sobreNos/SobreNos';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
        <Router>
            <NavBar />
            <div style={{ minHeight: '100vh' }}>
                <Routes> // Antigo Switch
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastrousuario" element={<CadastrarUsuario />} />
                    <Route path="/tema" element={<ListaTema />} />
                    <Route path="/postagens" element={<ListaPostagem />} />
                    <Route path="/sobrenos" element={<SobreNos />} />
                    <Route path="/formularioPostagem" element={<CadastroPost />} />
                    <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
                    <Route path="/formularioTema" element={<CadastroTema />} />
                    <Route path="/formularioTema/:id" element={<CadastroTema />} />
                    <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                    <Route path="/deletarTema/:id" element={<DeletarTema />} />
                </Routes>
            </div>
            <Footer />
        </Router>
        </Provider>
    );
}
export default App;

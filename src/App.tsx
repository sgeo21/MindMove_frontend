
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"
import { AuthProvider } from "./contexts/AuthContext"
import { ToastContainer } from "react-toastify"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"

import Perfil from "./pages/perfil/Perfil";
import AtualizarUsuario from "./pages/perfil/AtualizarUsuario";
import ListarExercicios from "./components/exercicios/listarexercicios/ListarExercicios"
import FormExercicios from "./components/exercicios/formexercicios/FormExercicios"
import DeletarExercicios from "./components/exercicios/deletarexercicios/DeletarExercicios"
import SobreNos from "./pages/sobrenos/SobreNos"
import HomeOpen from "./pages/homeopen/HomeOpen"
import HomePrivate from "./pages/homeprivate/HomePrivate"


function App() {

    const [menuState, setMenuState] = useState<'closed' | 'open'>('closed');

    const handleMenuToggle = () => {
        setMenuState(menuState === 'open' ? 'closed' : 'open');
    };

    const handleMenuClose = () => {
        setMenuState('closed');
    };

    return (
      <>
        <AuthProvider>
          <ToastContainer />
          <BrowserRouter>

            <Navbar
              menuState={menuState}
              onMenuToggle={handleMenuToggle}
              onMenuClose={handleMenuClose}
            />

            <div>
              <Routes>
                <Route path="/" element={<HomeOpen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path='/categorias' element={<ListarCategorias />} />
                <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/exercicios" element={<ListarExercicios />} />
                <Route path="/cadastroexercicios" element={<FormExercicios />} />
                <Route path="/editarexercicio/:id" element={<FormExercicios />} />
                <Route path="/deletarexercicio/:id" element={<DeletarExercicios />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/atualizarusuario" element={<AtualizarUsuario />} />
                <Route path="/sobrenos" element={<SobreNos />} />
              </Routes>
            </div>

            <Footer />
          </BrowserRouter>
        </AuthProvider>
        </>
    )
}
export default App

import { useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css'
import
// Layout Menu User
MenuUser from './layout/menuUser'

// Paginas Admin
import AdminAgenda from './pages/admin/agenda'
import Dasbhboard from './pages/admin/dashboard'
import Servico from './pages/admin/servico';
import Perfil from './pages/admin/perfil';
// Paginas Usuario
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import Agendamento from './pages/user/agendamento'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        {/* Rotas user */}
        <Route element={<MenuUser />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Route>
        {/* Rotas admin */}
        <Route element={<MenuUser />}>
          <Route path="/admin/dashboard" element={<Dasbhboard />} />
          <Route path="/admin/agenda" element={<AdminAgenda />} />
          <Route path="/admin/servico" element={<Servico/>}/>
          <Route path="/admin/perfil" element={<Perfil/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    // <Routes>
    //   {/* Layout para usuário gerais */}
    //   <Route element={<UserLayout />}> 
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/home" element={<HomeUser/>}/>
    //   </Route>

    //   {/* Layout para administração */}
    //   <Route element={<AdminLayout />}>
    //     <Route path="/login" element={<Login />} />
    //   </Route>
    // </Routes>
  )
}

export default App

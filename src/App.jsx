import { useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css'
import
// Layout Menu User
MenuUser from './layout/menuUser'

// Paginas Admin
import AdminAgenda from './pages/admin/agenda'
import Servico from './pages/admin/servico';
import Perfil from './pages/admin/perfil';
// Paginas Usuario
import Home from './pages/home'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        {/* Rotas user */}
        <Route element={<MenuUser />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Rotas admin */}
        <Route element={<MenuUser />}>
          <Route path="/admin/agenda" element={<AdminAgenda />} />
          <Route path="admin/servico" element={<Servico/>}/>
          <Route path="admin/perfil" element={<Perfil/>}/>
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

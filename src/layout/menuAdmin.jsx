import React from "react";
import { Outlet, Link } from 'react-router-dom';

const MenuAdmin = () => {
    return (
        <div>
            <header className="bg-blue-500 text-white p-4">
                <nav className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </header>

            {/* Aqui renderiza o conteúdo da rota */}
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    )
}
export default MenuAdmin;
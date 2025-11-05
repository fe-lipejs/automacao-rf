import react from 'react';
import { Outlet, Link } from 'react-router-dom';
import HamMenu from '../assets/icons/menuHam.png';
import Bell from '../assets/icons/bell.png';


const MenuUser = () => {
    return (
        <div>
            {/* <header className="bg-white-500 text-black-bold p-4">
                <nav className="flex gap-4">
                    <Link to="/">Hoeme</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </header> */}
            <header>
                <nav className="flex justify-between items-center p-4 bg-white shadow">
                    <img src={HamMenu} alt="" className='w-7 h-7' />
                    <img src={Bell} alt="" className='w-7 h-7' />
                </nav>
            </header>

            {/* Aqui renderiza o conteúdo da rota */}
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    )
}
export default MenuUser;
import react from 'react';
import { Outlet, Link } from 'react-router-dom';
import HamMenu from '../assets/icons/menuHam.png';
import Bell from '../assets/icons/bell.png';
import './menuUser.css'
import { useState } from 'react';



const MenuUser = () => {
    const [menuAtivo, setMenuAtivo] = useState(false)
    function menuAlternar() {
        setMenuAtivo(!menuAtivo)
    }

    return (
        <div>
            <header>
            <div className={`menu-container 
                    lg:w-[20vw] absolute z-0 p-4
                    h-screen w-[60vw] bg-white shadow
                    ${menuAtivo ? "menu-ativo" : "menu-inativo"}
                `}>
                    <img onClick={menuAlternar} className='w-[48px] h-[37px] -ml-2.5 -mt-1' src="https://img.icons8.com/?size=100&id=G73qnboyHDjl&format=png&color=000000" alt="" />
                    <br /><br /><br />
                    <div className="profile-container space-y-1">
                        <div className="profilePhoto  mx-auto bg-[#666] w-[120px] h-[120px] rounded-full"></div>
                        <div className='text-xl font-semibold text-center'>Nome Loja</div>
                        <div className='text-center'>Outras informações relevantes</div>
                    </div>
                    <div  onClick={menuAlternar} className="links-paginas space-y-2 text-2xl font-semibold">
                        <br /><br /><br />
                        <div><Link to="/">Home</Link></div>
                        {/* <div><Link to="/admin">Admin</Link></div> */}
                        <div><Link to="/admin/servico">Serviços</Link></div>
                        <div><Link to="/admin/agenda">Agenda</Link></div>
                    </div>
                    <br /><br /><br />
                    <div className='flex'>
                        <img className='w-[30px] h-[30px]' src="https://img.icons8.com/?size=100&id=22112&format=png&color=000000" alt="" />
                        <div className='text-2xl font-semibold'>Sair</div>
                    </div>
                </div>
                <nav className="flex justify-between items-center p-4 bg-white  shadow">
                    <img onClick={menuAlternar} src={HamMenu} alt="" className='w-7 h-7' />
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
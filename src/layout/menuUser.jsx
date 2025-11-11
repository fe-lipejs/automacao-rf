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
                <div className={`menu-container hidden fixed
                    lg:w-[20vw] absolute z-0 p-4
                    h-screen w-[60vw] bg-gray-900 text-neutral-100 shadow
                    ${menuAtivo ? "menu-ativo" : "menu-inativo"}
                `}> <i onClick={menuAlternar} className="fa-solid fa-xmark text-3xl pr-3"></i>
                    {/* <i onClick={menuAlternar} className='w-[48px] h-[37px] -ml-2.5 -mt-1' ></i> */}
                    <br /><br /><br />
                    <div className="profile-container space-y-1">
                        <div className="profilePhoto  mx-auto bg-gray-500 w-[120px] h-[120px] rounded-full"></div>
                        <div className='text-xl font-semibold text-center'>Nome Loja</div>
                        <div className='text-center'>Outras informações relevantes</div>
                    </div>
                    <div onClick={menuAlternar} className="links-paginas pl-3 space-y-2 text-xl font-semibold">
                        <br /><br /><br />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/admin/perfil">Perfil</Link></div>
                        <div><Link to="/admin/servico">Serviços</Link></div>
                        <div><Link to="/admin/agenda">Agenda</Link></div>
                    </div>
                    <br /><br /><br />
                    <Link to="/cadastro">
                        <div onClick={menuAlternar} className='flex pl-2'>
                            <i className="fa-solid fa-right-from-bracket pt-1.5 text-2xl"></i>
                            {/* <img className='w-[30px] h-[30px]' src="https://img.icons8.com/?size=100&id=22112&format=png&color=000000" alt="" /> */}
                            <div className='text-2xl font-semibold'>Sair</div>
                        </div>
                    </Link>
                </div>
                <nav className="flex w-full text-neutral-100 bg-gray-900 justify-between items-center p-4 shadow">
                    <i className="fa-solid fa-bars  text-3xl pr-3" onClick={menuAlternar} ></i>
                    {/* <img onClick={menuAlternar} src={HamMenu} alt="" className='w-7 h-7' /> */}
                    {/* <img src={Bell} alt="" className='w-7 h-7' /> */}
                    <i className="fa-solid fa-bell  text-3xl pr-3" onClick={menuAlternar} ></i>

                </nav>

            </header>


            {/* Aqui renderiza o conteúdo da rota */}
            <main className="p-0">
                <Outlet />
            </main>
        </div>
    )
}
export default MenuUser;
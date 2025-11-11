import React from "react"
import { Outlet, Link } from 'react-router-dom';


function Dashboard() {
    return (
        <>
            <div className="text-neutral-300">
                {/* Container Geral */}
                <div className="w-full h-full bg-neutral-900 flex flex-col items-center p-10">
                    {/* Informações Perfil Admin */}
                    <div className="informacoes-container bg-neutral-800 h-content
                    flex flex-col items-center justify-between 
                    p-7 w-[90vw] max-w-[400px] rounded-md
                    text-center 
                ">
                        {/* Foto e Informações do Usuário */}
                        <div>
                            <div className="foto-perfil flex-col flex  justify-center">
                                <div className="bg-neutral-600 h-25 w-25 rounded-full"></div>
                            </div>
                            <div className="flex flex-col items-center pt-4">
                                <span className="font-bold">Admin Name</span>
                                <span className="text-sm">@admin_name</span>
                            </div>
                        </div>
                        {/* Informações do Endereço Admin */}
                        <div className="flex flex-col items-center">
                            <div className="telefone">
                                <span className="font-bold">(99)-98888-7777</span>
                            </div>
                            <br />
                            <div className="endereco flex flex-col p--5">
                                <span>Rua Estrada 10</span>
                                <span className="text-[12px] font-semibold">Bairro tal, Cidade-ES</span>
                            </div>
                        </div>
                        {/* Botão Editar Perfil */}
                        <div className="m-5 p-2 w-full rounded-md cursor-pointer
                        bg-neutral-900 active:bg-neutral-600 font-semibold
                    ">
                            Editar Perfil
                        </div>
                    </div>

                    {/* Botões de Configuração */}
                    <div className="w-full h-full flex justify-center p-5">
                        <Link to="/admin/servico">
                            <div className="
                        flex justify-center items-center
                        h-18 w-18 m-2 rounded-md 
                        bg-neutral-800 active:bg-neutral-700 cursor-pointer
                        ">
                                <i class="fa-solid fa-scissors"></i>
                            </div>
                        </Link>
                        <div className="
                        flex justify-center items-center
                        h-18 w-18 m-2 rounded-md 
                        bg-neutral-800 active:bg-neutral-700 cursor-pointer
                        text-xl
                        ">
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                        <div className="
                        flex justify-center items-center
                        h-18 w-18 m-2 rounded-md 
                        bg-neutral-800 active:bg-neutral-700 cursor-pointer
                        ">
                            <i class="fa-solid fa-gear"></i>
                        </div>
                    </div>

                    {/* Próximos agendamentos */}
                    <div className="agendamento-container flex flex-col items-center w-full p-5">
                        <span className="w-[90vw] max-w-[400px] font-semibold pb-2">Próximos agendamentos</span>
                        {/* Agendamentos */}
                        {[1, 2, 3].map((nRepeticoes) => (
                            <div key={nRepeticoes} className="flex flex-col items-center p-1.5">
                                <div className="flex justify-between 
                                px-5 h-18 w-[90vw] max-w-[400px] rounded-md
                                bg-neutral-800 active:bg-neutral-700 cursor-pointer
                            ">
                                    <div className="horario flex flex-col justify-center">
                                        <span className="font-bold">Nome Cliente</span>
                                        <span>10:30 AM</span>
                                    </div>
                                    <div className="foto-perfil flex flex-col justify-center">
                                        <div className="bg-neutral-600 h-14 w-14 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard;


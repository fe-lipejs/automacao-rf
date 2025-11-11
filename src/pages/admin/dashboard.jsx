function Dashboard() {
    return (
        <div className="text-neutral-200">
            <div className="w-full h-full bg-neutral-900 flex flex-col items-center p-10">
                {/* Informações Perfil */}
                <div className="informacacoes-container flex flex-col items-center justify-between p-7 bg-neutral-800 h-content w-[90vw] max-w-[400px] rounded-md text-center">
                    {/* Foto e Username */}
                    <div>
                        <div className="foto-perfil flex-col flex justify-center">
                            <div className="bg-neutral-600 h-25 w-25 rounded-full"></div>
                        </div>
                        <div className="flex flex-col items-center pt-4">
                            <span className="font-bold">Felipe Barber</span>
                            <span className="text-sm">@felipebarber</span>
                            <span></span>
                        </div>
                    </div>
                    {/* iNFORMAÇOES ENDEREÇO */}
                    <div className="text-sm flex flex-col items-center">
                        <div className="telefone">
                            <span className="font-bold">(27) 99730-3135</span>
                        </div>
                        <br />
                        <div className="inf-endereco flex flex-col p-5">
                            <span>Rua Senna 1069</span>
                            <span className="text-[12px] font-semibold">João Goulart, Vila Velha- ES</span>
                        </div>
                    </div>
                    {/* bUTTON */}
                    <div className="div m-5 p-2 w-full rounded-md bg-neutral-900 cursor-pointer active:bg-neutral-700 font-semibold ">
                        <span>Editar perfil</span>
                    </div>

                </div>
                {/* Botoes configuração */}
                <div className="w-full h-full flex justify-center p-5">
                    <div className="h-18 w-18 m-2 rounded-md bg-neutral-800 cursor-pointer active:bg-neutral-700 flex flex justify-center items-center">
                        <i class="fa-solid fa-scissors"></i>
                    </div>
                    <div className="h-18 w-18 m-2 rounded-sm bg-neutral-800 cursor-pointer active:bg-neutral-700 flex flex justify-center items-center">
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="h-18 w-18 m-2 rounded-sm bg-neutral-800 cursor-pointer active:bg-neutral-700 flex flex justify-center items-center">
                        <i class="fa-solid fa-gear"></i>
                    </div>
                </div>

                {/* Proximos agendamentos */}
                <div className="agendamentos-container flex flex-col items-center w-full p-5 ">
                    <span className="w-[90vw] max-w-[400px] font-semibold pb-2">Próximos agendamentos</span>
                    {/* Agendamento 1 */}
                    <div className="flex flex-col items-center p-1.5">
                        <div className="agendamento flex justify-between px-5 h-18 bg-neutral-800 cursor-pointer active-bg-neutral-700 rounded-md w-[90vw] max-w-[400px]">
                            <div className="flex-col flex justify-center">
                                <span className="font-bold">John Dee</span>
                                <span>10:30 AM</span>
                            </div>
                            <div className="foto-perfil flex-col flex justify-center">
                                <div className="bg-neutral-600 h-14 w-14 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Agendamento 2*/}

                    <div className="flex flex-col items-center p-1.5">
                        <div className="agendamento flex justify-between px-5 h-18 bg-neutral-800 cursor-pointer active:bg-neutral-700 rounded-md w-[90vw] max-w-[400px]">
                            <div className="flex-col flex justify-center">
                                <span className="font-bold">John Dee</span>
                                <span>10:30 AM</span>
                            </div>
                            <div className="foto-perfil flex-col flex justify-center">
                                <div className="bg-neutral-600 h-14 w-14 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Agendamento 3*/}
                    <div className="flex flex-col items-center p-1.5">
                        <div className="agendamento flex justify-between px-5 h-18 bg-neutral-800 cursor-pointer active-bg-neutral-700 rounded-md w-[90vw] max-w-[400px]">
                            <div className="flex-col flex justify-center">
                                <span className="font-bold">John Dee</span>
                                <span>10:30 AM</span>
                            </div>
                            <div className="foto-perfil flex-col flex justify-center">
                                <div className="bg-neutral-600 h-14 w-14 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Dashboard
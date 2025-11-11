function Dashboard() {
    return (
        <div className="">
            <div className="w-full h-screen bg-neutral-900 ">
                <div className="agendamentos-container flex flex-col items-center w-full p-4 text-neutral-200">
                    <span className="w-[90vw] max-w-[400px] font-semibold pb-2">Próximos agendamentos</span>

                    <div className="flex flex-col items-center p-1.5">
                        <div className="agendamento flex justify-between px-5 h-18 bg-neutral-800 rounded-md w-[90vw] max-w-[400px]">
                            <div className="flex-col flex justify-center">
                                <span className="font-bold">John Dee</span>
                                <span>10:30 AM</span>
                            </div>
                            <div className="foto-perfil flex-col flex justify-center">
                                <div className="bg-neutral-600 h-14 w-14 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-1.5">
                        <div className="agendamento flex justify-between px-5 h-18 bg-neutral-800 rounded-md w-[90vw] max-w-[400px]">
                            <div className="flex-col flex justify-center">
                                <span className="font-bold">John Dee</span>
                                <span>10:30 AM</span>
                            </div>
                            <div className="foto-perfil flex-col flex justify-center">
                                <div className="bg-neutral-600 h-14 w-14 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center p-1.5">
                        <div className="agendamento flex justify-between px-5 h-18 bg-neutral-800 rounded-md w-[90vw] max-w-[400px]">
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
import React from "react";
import { useNavigate } from "react-router-dom"
import AgendaPadrao from "../../components/agenda/agendaPadrao";
import AgendaPersonalizada from "../../components/agenda/agendaPersonalizada";
import { ChevronDown, ChevronUp, ChevronLeft, Clock, Calendar } from "lucide-react";

function Agenda() {
    const navegar = useNavigate();

    return (
        <>
            <div className="text-neutral-300  h-screen">

                {/* Container Geral */}
                <div className=" flex flex-col items-center w-full h-full bg-neutral-900 p-5">
                    <div className="w-[90vw] max-w-[500px] flex justify-between items-center">
                        <div
                            onClick={() => (navegar("/admin/dashboard"))}
                            className="flex items-center justify-center cursor-pointer">
                            <ChevronLeft className="text-neutral-00" />
                            <span className="text-neutral-400">Voltar</span>
                        </div>
                        <span className="mx-5 font-semibold text-lg text-right">Agenda do Administrador</span>
                    </div>


                    <div className="container-jornada">
                        <br /><br />
                        <div className="w-[90vw] max-w-[500px] flex justify-between items-center bg-neutral-800 rounded-lg p-7">
                            <div className="flex items-center">
                                <Clock className="mr-4" />
                                <div className="flex flex-col ">
                                    <span className="font-semibold text-md">Jornada de Trabalho</span>
                                    <span className="text-[10px]">Dias e horários configurados</span>
                                </div>
                            </div>
                            <ChevronDown />
                        </div>
                    </div>

                    <div className="container-jornada flex flex-col">
                        <br />
                        <div className="w-[90vw] max-w-[500px] flex justify-between items-center bg-neutral-800 rounded-lg p-7">
                            <div className="flex items-center">
                                <Calendar className="mr-4" />
                                <div className="flex flex-col ">
                                    <span className="font-semibold text-md">Meu calendário</span>
                                    <span className="text-[10px]">Horários removidos e Dias bloquados</span>
                                </div>
                            </div>
                            <ChevronDown />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Agenda;
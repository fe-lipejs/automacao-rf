import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import AgendaPadrao from "../../../components/agenda/agendaPadrao";
import AgendaPersonalizada from "../../../components/agenda/agendaPersonalizada";
import { Pen, ChevronDown, ChevronUp, ChevronLeft, Clock, Calendar } from "lucide-react";

function Agenda() {
    const navegar = useNavigate();
    const [abrirMenu, setAbrirMenu] = useState(false);

    return (
        <>
            <div className="text-neutral-300  h-screen">

                {/* Container Geral */}
                <div className=" flex flex-col items-center w-full h-full bg-neutral-900 p-5">
                    {/* TITULO PAGINA */}
                    <div className="w-[90vw] max-w-[500px] flex justify-between items-center">
                        <div
                            onClick={() => (navegar("/admin/dashboard"))}
                            className="flex items-center justify-center cursor-pointer">
                            <ChevronLeft className="text-neutral-00" />
                            <span className="text-neutral-400">Voltar</span>
                        </div>
                        <span className="mx-5 font-semibold text-lg text-right">Agenda do Administrador</span>
                    </div>
                    <br /><br />

                    {/* Dias de Trabaalho */}
                    <div className="active:scale-99 cursor-pointer container-jornada flex flex-col bg-neutral-800 rounded-lg">
                        <div onClick={() => setAbrirMenu(!abrirMenu)} className="w-[90vw] max-w-[500px] flex justify-between items-center  p-7">
                            <div className="flex items-center">
                                <Clock className="mr-4" />
                                <div className="flex flex-col ">
                                    <span className="font-semibold text-md">Jornada de Trabalho</span>
                                    <span className="text-[10px]">Dias e horários configurados</span>
                                </div>
                            </div>
                            {abrirMenu === true ? 
                                <ChevronUp onClick={() => setAbrirMenu(!abrirMenu)} />
                                :
                                <ChevronDown onClick={() => setAbrirMenu(!abrirMenu)} />
                            }
                        </div>
                        <div className={`${abrirMenu === false ? "h-0 mx-50" : "h-30 m-5"} informacoes bg-neutral-700 rounded-lg transition-all duration-500`}></div>
                        <div onClick={() => (navegar("calendario"))} 
                            className={`${abrirMenu === false ? "opacity-0 h-0 mx-40" : "h-14 m-5"} mt-0 informacoes flex items-center justify-center bg-[#0B0B0C]  active:bg-neutral-800 rounded-lg transition-all duration-500 `}>
                            <Pen className="h-4.5 mr-1"/><span className="font-semibold text-neutral-300">Editar Jornada</span>
                        </div>
                    </div>



                    {/* Calendario */}
                    <div className="container-calendario flex flex-col">
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
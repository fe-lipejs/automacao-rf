import { useNavigate } from "react-router-dom"
import { Pen, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";


export default function AdminAgendaCalendario() {
    const navegar = useNavigate();
    return (
        <div>
            <div>

                <div className="text-neutral-300  h-screen">

                    {/* Container Geral */}
                    <div className=" flex flex-col items-center w-full h-full bg-neutral-900 p-5">
                        {/* TITULO PAGINA */}
                        <div className="containerRes flex justify-between items-center">
                            <div
                                onClick={() => (navegar("/admin/agenda"))}
                                className="flex items-center justify-center cursor-pointer">
                                <ChevronLeft className="text-neutral-00" />
                                <span className="text-neutral-400">Voltar</span>
                            </div>
                            <span className="mx-5 font-semibold text-lg text-right">Defina seu Calendário</span>
                        </div>
                        <br /><br />
                        <div className="containerRes flex justify-between items-center">
                            <span>Toque em um dia do calendário para <strong>bloquar horários</strong> ou
                                <strong> o dia inteiro</strong>. As alterações salvas aparecerão logo abaixo.</span>
                        </div>
                        <br /><br />
                        <div className="containerRes flex flex-col bg-neutral-800 rounded-xl h-100 w-80 border border-neutral-700">
                            {/* Calendário Título */}
                            <div className="flex justify-between p-5">
                                <div>
                                    <span className="font-semibold text-lg">Novembro </span>
                                    <span className="font-semibold text-lg">2025</span>
                                </div>
                                <div className="flex ">
                                    <ChevronLeft className="cursor-pointer mr-2" />
                                    <ChevronRight className="cursor-pointer" />
                                </div>
                            </div>
                            <table>
                                <thead >
                                    {["D","S","T","Q","Q","S","S"].map((dia) => (
                                        <th className="font-normal text-neutral-500" key={dia}>{dia}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
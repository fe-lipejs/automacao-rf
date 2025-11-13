import { useNavigate } from "react-router-dom"
import { Pen, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, CalendarOff, Clock, Calendar, X } from "lucide-react";
import { useState } from "react";


export default function AdminAgendaCalendario() {
    const navegar = useNavigate();
    const [mes, setMes] = useState(10)
    const diasNoMes = new Date(2025, mes + 1, 0).getDate()
    const diaMesStart = new Date(2025, mes, 1).getDay()
    const [aparecerMenu, SetAparecerMenu] = useState(false)
    const horarios = [
        "08:00", "08:30",
        "09:00", "09:30",
        "10:00", "10:30",
        "11:00", "11:30",
        "12:00", "12:30",
        "13:00", "13:30",
        "14:00", "14:30",
        "15:00", "15:30",
        "16:00", "16:30",
        "17:00", "17:30",
        "18:00"
    ];


    let dias = 0

    const meses = {
        0: "Janeiro",
        1: "Fevereiro",
        2: "Março",
        3: "Abril",
        4: "Maio",
        5: "Junho",
        6: "Julho",
        7: "Agosto",
        8: "Setembro",
        9: "Outubro",
        10: "Novembro",
        11: "Dezembro"
    };




    return (
        <div>

            {/* Tela Sobreposta */}
            <div className={`
                ${aparecerMenu === true ? "fixed z-2" : "fixed hidden -z-5 "}
                  allCenterVertical
                backdrop-blur-[5px] inset-0 bg-black/80
                `
            }>
                <div className={` ${aparecerMenu === true ? "opacity-100" : "opacity-0 h-0"}  p-5 transition-opacity duration-300 out z-2 containerRes inset-0 bg-neutral-700/20 rounded-lg border border-neutral-800`}>
                    <div className="flex justify-between items-center p-5">
                        <div className="">
                            <div className="font-semibold text-xl">20/09/2025</div>
                        </div>
                        <X className="cursor-pointer active:text-neutral-50" onClick={() => (SetAparecerMenu(!aparecerMenu))} />
                    </div>
                    <div className="p-5">
                        <span >Escolha se deseja <strong>bloquear o dia todo </strong>ou apenas alguns horários específicos. Toque nos horários abaixo para marcar/desmarcar.</span>
                    </div>
                    <div
                        className={`${aparecerMenu === false ? "opacity-0 h-0 mx-40" : "h-14 m-5"} mt-0 cursor-pointer flex items-center justify-center bg-red-900  active:scale-97 rounded-lg transition-all duration-150 `}>
                        <CalendarOff className="h-4.5 mr-1" /><span className="font-semibold text-neutral-300">Bloquear o dia todo</span>
                    </div>
                    <hr class="border-neutral-700 my-4 mx-5" />
                    <div className="flex flex-wrap justify-center m-5 gap-2">
                        {horarios.map((hora) => (
                            <div className="allCenterHorizon px-7 h-10 bg-neutral-800 rounded-xl">
                                <div className="text-sm" >{hora}</div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={`${aparecerMenu === false ? "opacity-0 h-0 mx-40" : "h-14 m-5"} mt-0 cursor-pointer flex items-center justify-center bg-black  active:bg-neutral-800 rounded-lg transition-all duration-150 `}>
                        <CalendarOff className="h-4.5 mr-1" /><span className="font-semibold text-neutral-300">Bloquear o dia todo</span>
                    </div>

                </div>
            </div>

            {/* Calendario container  */}
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
                        <br /><br />
                        <div className="containerRes flex justify-between text-center items-center">
                            <span>Toque em um dia do calendário para <strong>bloquar horários</strong> ou
                                <strong> o dia inteiro</strong>. As alterações salvas aparecerão logo abaixo.</span>
                        </div>
                        <br /><br />
                        <div className="w-full max-w-[400px] flex flex-col bg-neutral-800 rounded-xl h-content pb-6 w-80 border border-neutral-700">
                            {/* Calendário Título */}
                            <div className="flex justify-between p-5 select-none">
                                <div>
                                    <span className="font-semibold text-lg">{meses[mes]} </span>
                                    <span className="font-semibold text-lg">2025</span>
                                </div>
                                <div className="flex  ">
                                    <ChevronLeft
                                        onClick={() => {
                                            setMes(mes - 1)
                                            return mes < 1 ? setMes(11) : ""
                                        }}
                                        className="cursor-pointer mr-2 active:text-neutral-400" />
                                    <ChevronRight
                                        onClick={() => {
                                            setMes(mes + 1)
                                            return mes > 10 ? setMes(0) : ""
                                        }}
                                        className="cursor-pointer active:text-neutral-400" />
                                </div>
                            </div>
                            <table>
                                <thead >
                                    <tr>
                                        {["D", "S", "T", "Q", "Q", "S", "S"].map((key, value) => (
                                            <th className="select-none font-normal text-neutral-500" key={value}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>

                                    {[...Array(6)].map((key, linha) => (
                                        <tr key={linha} className="select-none text-center">
                                            {[...Array(7)].map((k, coluna) => {

                                                if (linha === 0 && coluna < diaMesStart) return <td key={coluna}></td>
                                                if (dias > diasNoMes) return <td key={coluna}></td>
                                                dias++
                                                return <td onClick={() => (SetAparecerMenu(!aparecerMenu))} className="select-none cursor-pointer active:scale-120 active:text-orange-300" key={coluna}>{dias}</td>

                                            })}
                                        </tr>
                                    ))}



                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
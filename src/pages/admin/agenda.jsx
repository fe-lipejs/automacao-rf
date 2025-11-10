import React from "react";
import AgendaPadrao from "../../components/agenda/agendaPadrao";
import AgendaPersonalizada from "../../components/agenda/agendaPersonalizada";

function Agenda() {
    return (
        <div className="flex justify-center items-cente">
            <div className="
                flex flex-col justify-center items-center
                bg-neutral-50 p-5 w-[90vw] sm:w-[640px]  rounded-xl shadow-xl
                ">
                <AgendaPadrao/>
                <br />
                <AgendaPersonalizada/>
            </div>
        </div>
   
    );
}
export default Agenda;
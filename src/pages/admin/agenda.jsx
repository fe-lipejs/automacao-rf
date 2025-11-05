import React from "react";
import AgendaPadrao from "../../components/agenda/agendaPadrao";
import AgendaPersonalizada from "../../components/agenda/agendaPersonalizada";

function Agenda() {
    return (
        <>
            <div className="space-y-10 min-h-screen flex flex-col items-center justify-center">
                <div className="text-5xl font-bold">Agenda Page</div>
                <AgendaPadrao />
                <AgendaPersonalizada mes={9} ano={2025}/>
            </div>
        </>
    );
}
export default Agenda;
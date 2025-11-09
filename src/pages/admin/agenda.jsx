import React from "react";
import AgendaPadrao from "../../components/agenda/agendaPadrao";
import AgendaPersonalizada from "../../components/agenda/agendaPersonalizada";

function Agenda() {
    return (
        <div>
            <div className="flex justify-center">
                <AgendaPersonalizada/>
            </div>
        </div>
   
    );
}
export default Agenda;
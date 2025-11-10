import React, { useState } from "react";
import "./agendaPadrao.css";

export default function AgendaPadrao() {
  const linha = [...Array(7)]
  const semana = {
    0: "Domingo",
    1: "Segunda-feira",
    2: "Terça-feira",
    3: "Quarta-feira",
    4: "Quinta-feira",
    5: "Sexta-feira",
    6: "Sábado",
  }
  return (
    <div>
      <div className="">
        {linha.map((k, i) => (
          // bg-neutral-100 text-neutral-500 caso colocar o unselect
          <div className="container cursor-pointer flex flex-col  sm:flex-row justify-center bg-neutral-50 sm:w-140 w-[80vw] p-3 pt-7 rounded-md shadow-lg shadow-neutral-200 mb-5 " key={i}>
            <span className="font-bold text-xl pb-5">{semana[i]}</span>
            <div className="flex justify-center ">
              <div ><label className="ml-4">Início: <input value="08:00" className="border border-neutral-400 rounded-md p-1 mr-5" type="time" /></label></div>
              <div><label>Fim:  <input className="border border-neutral-400 rounded-md p-1" type="time" /></label></div>
            </div>

            <div className="flex justify-center mt-2">
              <div><label>Almoço: <input className="border border-neutral-400 rounded-md p-1 mr-5" type="time" /></label></div>
              <div><label>Até:  <input className="border border-neutral-400 rounded-md p-1" type="time" /></label></div>
            </div>
            <br />
          </div>
        ))}
      </div>
      
    </div >
  )
}

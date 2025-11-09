import React, { useState } from "react";
import "./agendaPersonalizada.css"

export default function AgendaPersonalizada({ }) {
  // CALENDÁRIO

  const ano = 2025
  const mes = 3
  const coluna = [...Array(6)]
  const linha = [...Array(7)]
  let dias = 1
  let daysContador = 1
  const totalDiasMes = new Date(ano, mes + 1, 0).getDate();
  const diaDaSemana = new Date(ano, mes, 1).getDay();
  const semana = {
    0: "Domingo",
    1: "Segunda-feira",
    2: "Terça-feira",
    3: "Quarta-feira",
    4: "Quinta-feira",
    5: "Sexta-feira",
    6: "Sábado"
  }
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

  const [selecao, SetSelecao] = useState(true)
  

  console.log(totalDiasMes, meses[mes], semana[diaDaSemana])

  return (
    <div>
      <div className="flex justify-center space-y-7">
        <img className="h-10 w-10 rotate-180 mx-7" src="https://img.icons8.com/?size=100&id=26138&format=png&color=000000" alt="" srcset="" />
        <span className="font-bold text-3xl">{meses[mes]}</span>
        <img className="h-10 w-10 mx-7" src="https://img.icons8.com/?size=100&id=26138&format=png&color=000000" alt="" srcset="" />
      </div>
      <table className="border-separate border-spacing-2" >
        <thead>

          <tr>
            <th >Dom</th>
            <th>Seg</th>
            <th>Ter</th>
            <th>Qua</th>
            <th>Qui</th>
            <th>Sex</th>
            <th>Sáb</th>
          </tr>
        </thead>
        <tbody>
          {coluna.map((col, i) => (
            <tr key={i}>
              {linha.map((lin, k) => {

                if (0 === i && diaDaSemana > k) return <td className="td-apagado"></td>
                if (dias > totalDiasMes) return <td className="hidden" key={k}>{daysContador++}</td>
                const valorDias = dias
                dias++;
                return <td key={k}>{valorDias}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}
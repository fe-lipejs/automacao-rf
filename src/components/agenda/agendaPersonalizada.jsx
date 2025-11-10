import React, { useState } from "react";
import "./agendaPersonalizada.css"

export default function AgendaPersonalizada({ }) {
  // CALENDÁRIO

  const ano = 2025
  const [mes, setMes] = useState(11)
  const coluna = [...Array(6)]
  const linha = [...Array(7)]
  let dias = 1
  let daysContador = 1
  const totalDiasMes = new Date(ano, mes + 1, 0).getDate();
  const diaDaSemana = new Date(ano, mes, 1).getDay();
  const semana = {
    0: "Domingo",
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
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

  const [selecao, setSelecao] = useState([])
  const [passarMes, setPassarMes] = useState()

  //  Função para marcar os dias no calendário
  const marcarTags = (key) => {
    console.log(key)
    setSelecao((prev) =>
      prev.includes(key)
        ? prev.filter((item) => item !== key) // traz valores que não tenha o key/diferentes de key
        : [...prev, key]

    )

  }

  const passarMesCalendario = (valor) => {
    setMes(prev => (prev + valor + 12) % 12);
    setSelecao([]) // se eu nao zerar continuando marcando em outros meses
    // setMes( prev =>{
    //   const soma = prev+valor
    //   if(soma > 11){
    //     return 0
    //   }
    //   if(soma < 0){
    //     return 11
    //   }
    //   return soma
    // })




  }

  return (
    <div>

      {/* CALENDARIO TOTAL CONTAINER */}
      <div>
        {/* Seletor Calendário */}
        <div className="content-table flex justify-center space-y-7">
          <img onClick={() => passarMesCalendario(-1)} className="h-10 w-10 rotate-180 mx-2 cursor-pointer" src="https://img.icons8.com/?size=100&id=26138&format=png&color=000000" alt="" />
          <span className="font-bold text-3xl">{meses[mes]}</span>
          <img onClick={() => passarMesCalendario(+1)} className="h-10 w-10 mx-2 cursor-pointer" src="https://img.icons8.com/?size=100&id=26138&format=png&color=000000" alt="" />
        </div>
        {/* Calendário */}
        <table className=" border-separate border-spacing-2" >
          <thead>
            <tr>
              <th>Dom</th>
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

                  if (0 === i && diaDaSemana > k) return <td key={k} className="bg-neutral-200"></td>
                  if (dias > totalDiasMes) return <td className="hidden" key={k}>{daysContador++}</td>
                  const valorDias = dias
                  dias++;
                  return <td
                    onClick={() => marcarTags(valorDias)}
                    className={`${selecao.includes(valorDias) ? "td-marcado" : ""} 
                  rounded-md 
                  h-[7vw] w-[10vw]
                  sm:h-13 sm:w-18`}
                    key={k}>{valorDias}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

}
import React,{useState} from "react";

export default function AgendaPersonalizada({ mes, ano }) {

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
  const agendamento = [
    "7 Dias",
    "15 Dias",
    "30 Dias"
  ]
  const [agendamentoSel,setAgendamentoSel] = useState("")

  const matrizCalendario = Array.from({ length: 6 }, () => Array(7).fill(null));

  const diasNoMes = (m, y) => new Date(y, m + 1, 0).getDate();
  const priDiaMes = (m, y) => new Date(y, m, 1).getDay();

  const totalDiasMes = diasNoMes(mes, ano);
  const totalDiasMesAnterior = diasNoMes(
    mes - 1 < 0 ? 11 : mes - 1,
    mes - 1 < 0 ? ano - 1 : ano
  );

  let diaAtual = 1;
  let diaProximo = 1;
  const posicaoInicialMes = priDiaMes(mes, ano);

  for (let linha = 0; linha < matrizCalendario.length; linha++) {
    for (let coluna = 0; coluna < matrizCalendario[0].length; coluna++) {
      if (linha === 0 && coluna < posicaoInicialMes) {
        matrizCalendario[linha][coluna] = {
          dia: totalDiasMesAnterior - posicaoInicialMes + coluna + 1,
          tipo: "anterior",
        };
      } else if (diaAtual <= totalDiasMes) {
        matrizCalendario[linha][coluna] = {
          dia: diaAtual++,
          tipo: "atual",
        };
      } else {
        matrizCalendario[linha][coluna] = {
          dia: diaProximo++,
          tipo: "proximo",
        };
      }
    }
  }

  return (
    <>

      <div className="flex flex-col justify-betwen max-w-md mx-auto mt-6">
        <select 
          value={agendamentoSel} 
          onChange={(e) => setAgendamentoSel(e.target.value)}
          >
          {
            agendamento.map((modelo,index) => (
              <option key={index} value={modelo}>{modelo}</option>
            ))
          }
        </select>
        <div className="flex items-center justify-between text-2xl h-16">
          <div>left </div>
          <div>{meses[mes]}</div>
          <div>right </div>
        </div>
        <table className="w-full border border-gray-200 rounded-lg shadow-md border-separate" style={{ borderSpacing: '4px' }}>
          <thead className="bg-gray-100 rounded-t-lg">
            <tr>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dia) => (
                <th key={dia} className="py-3 text-gray-700 font-medium">
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrizCalendario.map((linha, i) => (
              <tr key={i}>
                {linha.map((celula, j) => (
                  <td
                    key={j}
                    className={`py-4 px-3 text-center rounded-md ${celula.tipo === "atual"
                      ? "bg-white text-gray-900 font-semibold"
                      : "bg-gray-100 text-gray-400"
                      }`}
                  >
                    {celula.dia}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

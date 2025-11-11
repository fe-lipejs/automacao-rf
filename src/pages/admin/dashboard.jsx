function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-neutral-200">
      {/* Container principal em coluna */}
      <div className="flex flex-col w-full h-full items-center">

        {/* BLOCO 1 - Informações */}
        <div className="flex-1 flex flex-col items-center justify-center p-5">
          <div className="informacacoes-container flex flex-col items-center justify-between p-7 bg-neutral-800 w-[90vw] max-w-[400px] rounded-md text-center">
            {/* Foto e Username */}
            <div>
              <div className="foto-perfil flex-col flex justify-center">
                <div className="bg-neutral-600 h-24 w-24 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center pt-4">
                <span className="font-bold">Felipe Barber</span>
                <span className="text-sm">@felipebarber</span>
              </div>
            </div>

            {/* Informações de endereço */}
            <div className="text-sm flex flex-col items-center">
              <div className="telefone">
                <span className="font-bold">(27) 99730-3135</span>
              </div>
              <br />
              <div className="inf-endereco flex flex-col">
                <span>Rua Senna 1069</span>
                <span className="text-[12px] font-semibold">João Goulart, Vila Velha - ES</span>
              </div>
            </div>

            {/* Botão */}
            <div className="m-5 p-2 w-full rounded-md bg-neutral-900 font-semibold">
              <span>Editar perfil</span>
            </div>
          </div>
        </div>

        {/* BLOCO 2 - Agendamentos */}
        <div className="flex-2 flex flex-col items-center w-full p-4">
          <span className="w-[90vw] max-w-[400px] font-semibold pb-2">Próximos agendamentos</span>

          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center p-1.5">
              <div className="agendamento flex justify-between px-5 h-18 bg-neutral-800 rounded-md w-[90vw] max-w-[400px]">
                <div className="flex-col flex justify-center">
                  <span className="font-bold">John Dee</span>
                  <span>10:30 AM</span>
                </div>
                <div className="foto-perfil flex-col flex justify-center">
                  <div className="bg-neutral-600 h-14 w-14 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
const Servicos = ({titulo}) => {
    return (
        <>
        <div className="text-center">{titulo}</div>
            <div className="md:justify-center ctn-servicos-geral flex gap-4 overflow-x-auto scrollbar-hide p-4 snap-x snap-mandatory">
                <div className="servico min-w-[150px] sm:min-w-[180px] md:min-w-[200px] flex-shrink-0 snap-center bg-white rounded-2xl shadow p-2">
                    <div className="image w-full aspect-[3/4] bg-black rounded-xl"></div>
                    <div className="nome text-center mt-2 font-medium">Serviço 1</div>
                    <div className="valor text-center text-gray-600">R$ 45,00</div>
                </div>

                <div className="servico min-w-[150px] sm:min-w-[180px] md:min-w-[200px] flex-shrink-0 snap-center bg-white rounded-2xl shadow p-2">
                    <div className="image w-full aspect-[3/4] bg-black rounded-xl"></div>
                    <div className="nome text-center mt-2 font-medium">Serviço 2</div>
                    <div className="valor text-center text-gray-600">R$ 60,00</div>
                </div>

                <div className="servico min-w-[150px] sm:min-w-[180px] md:min-w-[200px] flex-shrink-0 snap-center bg-white rounded-2xl shadow p-2">
                    <div className="image w-full aspect-[3/4] bg-black rounded-xl"></div>
                    <div className="nome text-center mt-2 font-medium">Serviço 3</div>
                    <div className="valor text-center text-gray-600">R$ 70,00</div>
                </div>

                <div className="servico min-w-[150px] sm:min-w-[180px] md:min-w-[200px] flex-shrink-0 snap-center bg-white rounded-2xl shadow p-2">
                    <div className="image w-full aspect-[3/4] bg-black rounded-xl"></div>
                    <div className="nome text-center mt-2 font-medium">Serviço 4</div>
                    <div className="valor text-center text-gray-600">R$ 80,00</div>
                </div>
            </div>
        </>
    )
}

export default Servicos;
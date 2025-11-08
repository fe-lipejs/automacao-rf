import React from "react";

function Cadastro() {
    return (
        <>
            <div className="flex  justify-center">
                <div className="container  md:w-180 min-h-screen bg-white space-y-8 flex flex-col justify-center items-center rounded-xl shadow-lg">
                    <span className="mt-10 p-7 text-4xl font-bold">Faça seu Cadastro</span>
                    {/* Nome Completo */}
                    <div className="w-full md:w-150 px-5 ">
                        <label className="font-semibold text-gray-700">Nome completo</label>
                        <input
                            type=""
                            placeholder="Ex.: João Batista"
                            className="
                                w-full mt-1 p-2 h-10 rounded-md
                                border-1
                                border-gray-400 
                                focus:border-2
                                focus:outline-none 
                                focus:border-gray-900 
                                bg-gray-100"
                        />
                    </div>
                    {/* Número Telefone */}
                    <div className="w-full md:w-150 px-5 ">
                        <label className="font-semibold text-gray-700">Celular</label>
                        <input
                            type=""
                            placeholder="Ex.: (99) 99999-9999"
                            className="
                                w-full mt-1 p-2 h-10 rounded-md
                                border-1
                                border-gray-400 
                                focus:border-2
                                focus:outline-none 
                                focus:border-gray-900 
                                bg-gray-100"
                        />
                    </div>
                    {/* Email */}
                    <div className="w-full md:w-150 px-5 ">
                        <label className="font-semibold text-gray-700">E-mail</label>
                        <input
                            type=""
                            placeholder="Ex.: joao@email.com"
                            className="
                                w-full mt-1 p-2 h-10 rounded-md
                                border-1
                                border-gray-400 
                                focus:border-2
                                focus:outline-none 
                                focus:border-gray-900 
                                bg-gray-100"
                        />
                    </div>
                    {/* Senha */}
                    <div className="w-full md:w-150 px-5 ">
                        <label className="font-semibold text-gray-700">Senha de Acesso</label>
                        <input
                            type="password"
                            required
                            placeholder="Crie sua senha"
                            className="
                                w-full mt-1 p-2 h-10 rounded-md
                                border-1
                                border-gray-400 
                                focus:border-2
                                focus:outline-none 
                                focus:border-gray-900 
                                bg-gray-100"
                        />
                    </div>

                    {/* Botao */}
                    <br /><br />
                    <div className="botao 
                        bg-neutral-900 h-12 w-75
                        flex flex-col justify-center
                        rounded-md 
                        active:bg-neutral-800
                        mb-10
                        
                    ">
                        <div className="text-white mx-auto font-semibold">Cadastre-se</div>
                    </div>
                     
                    
                </div>
            </div>
        </>
    )
}

export default Cadastro;
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function App() {
    const [selectedColor, setSelectedColor] = useState("");
    const navigate = useNavigate();

    const colors = [
        "#ff4757", // vermelho
        "#ffa502", // laranja
        "#f1c40f", // amarelo
        "#2ed573", // verde
        "#1e90ff", // azul
        "#3742fa", // azul escuro
        "#9b59b6", // roxo
        "#000000", // preto
    ];

    return (
        <div className="min-h-screen  flex justify-center items-center p-4">
            <div className="w-full max-w-5xl bg-white text-black rounded-2xl shadow-lg p-6 md:p-10">
                <h1 className="text-center text-2xl font-semibold mb-6">
                    Meu Perfil
                </h1>

                {/* layout responsivo */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Coluna esquerda */}
                    <div className="flex-1 flex flex-col items-center space-y-5">
                        {/* Fotos */}
                        <div className="flex flex-col items-center space-y-4 font-semibold text-gray-500">
                            <div className="flex flex-col justify-center items-center w-28 h-28 bg-neutral-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition">
                                <i className="fa-regular fa-camera text-2xl text-gray-600"></i>
                                <span className="text-center text-[10px]">Editar Foto Perfil</span>
                            </div>
                            <div className=" flex flex-col font-bold text-gray-500 w-48 h-24 bg-neutral-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition">
                                <i className=" fa-regular fa-camera text-xl"></i>
                                <span className="text-center text-[10px]">Editar Foto Perfil</span>
                            </div>
                        </div>

                        {/* Escolha de cor */}
                        <div className="w-50">
                            <h2 className="font-semibold text-lg mb-2">Selecione Cor</h2>
                            {/* Quando elemento nao cabe na mesma linha usa-se flex warp */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                                {colors.map((color) => (
                                    <div
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color
                                            ? "border-white scale-110"
                                            : "border-transparent"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Coluna direita */}
                    <div className="flex-[2] space-y-6">
                        {/* Informações principais */}
                        <div className="space-y-3">
                            <h2 className="font-semibold text-lg">Suas Informações</h2>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">
                                    Nome do seu Negócio
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex: Loja do Gustavo"
                                    className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Sua URL</label>
                                <input
                                    type="text"
                                    placeholder="Ex: lojagustavo.com"
                                    className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500"
                                />
                            </div>
                        </div>

                        {/* Outras informações */}
                        <div className="space-y-3">
                            <h2 className="font-semibold text-lg">Outras Informações</h2>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Telefone</label>
                                <input
                                    type="tel"
                                    placeholder="Ex: (00) 99999-9999"
                                    className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500" />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Ex: seuemail@gmail.com"
                                    className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500" />
                            </div>
                        </div>

                        {/* Endereço */}
                        <div className="space-y-3">
                            <h2 className="font-semibold text-lg">Endereço</h2>

                            <div>
                                <label className="text-sm font-semibold text-gray-600">Rua</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Rua Princesa Isabel"
                                    className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500" />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-sm font-semibold text-gray-600">Número</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: 12345"
                                        className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-600">Bairro</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Tirando Neves"
                                        className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-sm font-semibold text-gray-600">Cidade</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Vila Velha"
                                        className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500" />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-gray-6000">Estado</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Trancado Neves"
                                        className="w-full mt-1 bg-neutral-100 text-black rounded-lg p-2 outline-none focus:ring-2 focus:ring-black-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botão salvar */}
                <div className="mt-10">
                    <button 
                    onClick={() => {
                        alert("Salvo!")
                        navigate("/admin/dashboard");
                    }}
                    className="w-full md:w-auto px-10 py-3 bg-gray-900 hover:bg-blue-600 text-white font-semibold rounded-lg transition block mx-auto">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

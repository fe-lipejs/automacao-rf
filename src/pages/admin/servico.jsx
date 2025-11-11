import React, { useState } from "react";
import { Link } from "react-router-dom";
import CadastrarServico from "../../components/cadServico/cadServico"

export default function Servicos() {
  const [mostrarServicos, setMostrarServicos] = useState(false)
  const [editarCat, setEditarCat] = useState(false)
  const [mostrarTelaNova, setMostrarTelaNova] = useState(true)


  return (


    <div className="text-neutral-200 min-h-screen">


      {mostrarTelaNova && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative bg-neutral-900 rounded-xl p-6 w-[90%] max-w-[400px] text-neutral-100 shadow-xl shadow-black/40">

            {/* BOTÃO DE FECHAR */}
            <button
              onClick={() => setMostrarTelaNova(false)}
              className="absolute top-3 right-3 text-neutral-300 hover:text-white transition"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>

            {/* CONTEÚDO DA SUA TELA */}
            <CadastrarServico />

          </div>
        </div>
      )}



      {/* Container Geral */}
      <div className="w-full gap-2 min-h-screen bg-neutral-900 flex flex-col items-center p-10">


        {/* ### tela sobreposta */}
        {/* NOVA TELA SOBREPOSTA */}


        {/*  TITULO E BOTAO DE VOLTAR */}
        <div className="w-[90vw] max-w-[400px] text-2xl font-semibold pb-2">
          <Link to={"/admin/dashboard"}><i className="fa-solid fa-angle-left "></i></Link>
          <span className="pl-5">Categorias e Serviços</span>
        </div>

        {/*  ADICIONAR NOVA CATEGORIA INPUT */}
        <div className="pt-15 flex gap-3 w-[90vw] max-w-[400px]">
          <input className="bg-neutral-800  rounded-md h-12 w-full p-5 placeholder-neutral-300  text-neutral-50" type="text" name="" id="" placeholder="Adicionar categoria" />
          <button className="bg-[#0B0B0C]  active:bg-neutral-800 rounded-md h-12 p-5 flex justify-center items-center ">Adicionar</button>
        </div>

        <br /><br /><br />

        {/* CATEGORIAS ADICIONADAS */}
        <div className="categorias rounded-xl border border-neutral-700 p-1 py-5">
          <div className=" flex items-center justify-between p-2 gap-2 w-[90vw] max-w-[400px]">
            {editarCat === true ?
              (<input className="bg-neutral-800  rounded-md h-12 w-full p-5 placeholder-neutral-300  text-neutral-50" type="text" name="" id="" placeholder="Escreva categoria" />)
              :
              (<span className="font-semibold"> Corte de Cabelo</span>)}
            <div className="icones-editar flex gap-3">
              <div className={`${editarCat === true ? "bg-[#0B0B0C] " : "bg-neutral-800"} h-12 w-12  active:bg-neutral-700 rounded-md flex justify-center items-center`}>
                <i onClick={() => { setEditarCat(!editarCat) }}
                  className={`${editarCat === true ? "fa-solid fa-check " : "fa-solid fa-pen"}`}></i>
              </div>
              <div className="h-12 w-12 bg-neutral-800 active:bg-neutral-700 rounded-md flex justify-center items-center">
                <i className={`${editarCat === true ? "fa-solid fa-xmark" : "fa-solid fa-trash"}`}></i>
              </div>
              <div className="h-12 w-5  rounded-md flex justify-center items-center">
                <i
                  onClick={() => (setMostrarServicos(!mostrarServicos))}
                  className={`fa-solid ${mostrarServicos === false ? "fa-plus" : "fa-minus"}`}></i>
              </div>
            </div>
          </div>
          {/* Serviços */}
          <div className={`transition-all duration-500 overflow-hidden ${mostrarServicos ? "max-h-[500px] opacity-100" : "max-h-0  opacity-0"} flex flex-col pt-0 gap-2`}>
            <div className="pl-10 pt-4 w-70 flex justify-between items-center">
              <span>Corte Simp.. | R$ 30,00</span>
              <div className="flex gap-5">
                <div><i className="fa-solid fa-pen "></i></div>
                <div><i className="fa-solid fa-trash "></i></div>
              </div>
            </div>
            <div className="pl-10 pt-4 w-70 flex justify-between items-center">
              <span>Corte Mo... | R$25,00 </span>
              <div className="flex gap-5">
                <div><i className="fa-solid fa-pen "></i></div>
                <div><i className="fa-solid fa-trash "></i></div>
              </div>
            </div>
            <div className="pl-10 pt-4 w-70 flex justify-between items-center">
              <span>Escova | R$40,00</span>
              <div className="flex gap-5">
                <div><i className="fa-solid fa-pen "></i></div>
                <div><i className="fa-solid fa-trash "></i></div>
              </div>
            </div>
            <div className="pl-10 pt-4 w-70 flex justify-between items-center">
              <span>BuzzCut | R$30,00</span>
              <div className="flex gap-5">
                <div><i className="fa-solid fa-pen "></i></div>
                <div><i className="fa-solid fa-trash "></i></div>
              </div>
            </div>

          </div>
        </div>








      </div>
    </div>

  );
}

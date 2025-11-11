import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Servicos() {
  const [mostrarServicos,setMostrarServicos] = useState(false) 

  return (
    <>
      <div className="text-neutral-200">
        {/* Container Geral */}
        <div className="w-full gap-2 h-screen bg-neutral-900 flex flex-col items-center p-10">

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
              <span className="font-semibold"> Corte de Cabelo</span>
              <div className="icones-editar flex gap-3">
                <div className="h-12 w-12 bg-neutral-800 rounded-md flex justify-center items-center">
                  <i class="fa-solid fa-pen "></i>
                </div>
                <div className="h-12 w-12 bg-neutral-800 rounded-md flex justify-center items-center">
                  <i class="fa-solid fa-trash "></i>
                </div>
                <div className="h-12 w-5  rounded-md flex justify-center items-center">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            {/* Serviços */}
            <div className={`flex flex-col pt-5 gap-2`}>
              <div className="pl-10 pt-4 w-70 flex justify-between items-center">
                <span>Corte Simp.. | R$ 30,00</span>
                <div className="flex gap-5">
                  <div><i class="fa-solid fa-pen "></i></div>
                  <div><i class="fa-solid fa-trash "></i></div>
                </div>
              </div>
              <div className="pl-10 pt-4 w-70 flex justify-between items-center">
                <span>Corte Mo... | R$25,00 </span>
                <div className="flex gap-5">
                  <div><i class="fa-solid fa-pen "></i></div>
                  <div><i class="fa-solid fa-trash "></i></div>
                </div>
              </div>
              <div className="pl-10 pt-4 w-70 flex justify-between items-center">
                <span>Escova | R$40,00</span>
                <div className="flex gap-5">
                  <div><i class="fa-solid fa-pen "></i></div>
                  <div><i class="fa-solid fa-trash "></i></div>
                </div>
              </div>
              <div className="pl-10 pt-4 w-70 flex justify-between items-center">
                <span>BuzzCut | R$30,00</span>
                <div className="flex gap-5">
                  <div><i class="fa-solid fa-pen "></i></div>
                  <div><i class="fa-solid fa-trash "></i></div>
                </div>
              </div>

            </div>


          </div>






        </div>
      </div>
    </>
  );
}

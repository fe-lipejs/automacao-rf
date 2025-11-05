import React, { useState } from "react";
import "./agendaPadrao.css";

export default function SeletorDias() {
  const dias = [
    { id: "segunda", nome: "Segunda" },
    { id: "terca", nome: "Terça" },
    { id: "quarta", nome: "Quarta" },
    { id: "quinta", nome: "Quinta" },
    { id: "sexta", nome: "Sexta" },
    { id: "sabado", nome: "Sábado" },
    { id: "domingo", nome: "Domingo" },
  ];

  const [selecionados, setSelecionados] = useState([]);
  const [isDragging, setIsDragging] = useState(false); // se o usuario arrasta
  const [modo, setModo] = useState("add"); // se eu vou addd ou remover

  const toggleDia = (id, action = null) => {
    setSelecionados((prev) => { //eu poderia usar setSelecioandos(seleciandos+"oi"), mas eu vou fazer uma funçaao para tratar melhor
      const jaSelecionado = prev.includes(id);//verifica se o id já está no array prev, prev é os valores que já estão na variavel selecionados, includes retorna true ou false
      const modoAtual = action || modo;
      if (modoAtual === "add" && !jaSelecionado) return [...prev, id]; // eturn [...prev, id]; pega valores antigos e adiciona mais um
      if (modoAtual === "remove" && jaSelecionado)
        return prev.filter((d) => d !== id); //filtra no array a variaveis instricamente diferentes de id, ou seja filtra tudo aquilo que nao for id, filtra valores que nao seja id
      return prev;
    });
  };

  const handleStart = (id, e) => {
    e.preventDefault();
    const jaSelecionado = selecionados.includes(id);
    setModo(jaSelecionado ? "remove" : "add");
    toggleDia(id, jaSelecionado ? "remove" : "add");
    setIsDragging(true);
  };

  const handleMove = (e) => {
    if (!isDragging) return;

    const elemento = document.elementFromPoint(e.clientX, e.clientY);
    if (!elemento) return;

    const label = elemento.closest(".dia-label");
    if (label && label.dataset.id) {
      toggleDia(label.dataset.id);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="ctn-dias"
      onPointerUp={handleEnd}
      onPointerLeave={handleEnd}
      onPointerMove={handleMove}
    >
      {}
      {dias.map((dia) => (
        <label
          key={dia.id}
          data-id={dia.id}
          className={`dia-label ${
            selecionados.includes(dia.id) ? "ativo" : ""
          }`}
          onPointerDown={(e) => handleStart(dia.id, e)}
        >
          {dia.nome}
        </label>
      ))}
    </div>
  );
}
import React, { useState } from "react";

export default function ReactFunction() {
  let numb = 12;
  const [num, setNum] = useState(numb);
  const [grupo, setGrupo] = useState({
    item1: "",
    item2: 0,
    item3: false
  });

  const func = () => {
    setNum(num + 1);
  };

  const grupos = () =>
    setGrupo({
      item1: "texto",
      item2: 2,
      item3: true
    });

  return (
    <>
      <h1>Variavel numb: {numb}</h1>
      <h1>Valor do state: {num}</h1>
      <h1>Valor do Grupo: {grupo.item1}, {grupo.item2}, {grupo.item3.toString()}</h1>  
      <button type="button" onClick={grupos}>Mude o Grupo</button>
      <button type="button" onClick={func}>Mude o Número</button>
    </>
  );
}

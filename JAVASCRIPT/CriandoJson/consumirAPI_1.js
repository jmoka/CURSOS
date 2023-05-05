const url = "https://reqres.in/api/users?per_page=12"

async function ConsumirAPI() {
  try {
    const resposta = await fetch(url);
    const objetoAPI = await resposta.json();
    return objetoAPI;
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  const resultado = await ConsumirAPI();
  const usuarios = resultado.data;
  let indiceAtual = 0;

  

  const botaoAnterior = document.createElement("button");
  botaoAnterior.textContent = "Anterior";
  botaoAnterior.addEventListener("click", () => {
    if (indiceAtual > 0) {
      indiceAtual--;
      exibirUsuario(usuarios[indiceAtual]);
    }
  });

  const botaoProximo = document.createElement("button");
  botaoProximo.textContent = "Próximo";
  botaoProximo.addEventListener("click", () => {
    if (indiceAtual < usuarios.length - 1) {
      indiceAtual++;
      exibirUsuario(usuarios[indiceAtual]);
    }
  });

  document.body.appendChild(botaoAnterior);
  document.body.appendChild(botaoProximo);

  function exibirUsuario(usuario) {
    const itemUsuario = document.createElement("div");
    itemUsuario.innerHTML = `
      <p><strong>Nome:</strong> ${usuario.first_name} ${usuario.last_name}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <img src="${usuario.avatar}" alt="Avatar do usuário">
    `;
    const conteudoAntigo = document.querySelector("#conteudo");
    if (conteudoAntigo) {
      document.body.removeChild(conteudoAntigo);
    }
    itemUsuario.id = "conteudo";
    document.body.appendChild(itemUsuario);
  }

  exibirUsuario(usuarios[indiceAtual]);
})();



// (async () => {
//   const obj = await ConsumirAPI();

//   const usuarios = obj.data;

//   const lisObj = document.createElement("div");

//   for (let i = 0; i < usuarios.length; i++) {
//     const usuario = usuarios[i];
//     const itemUsuario1 = document.createElement("div");
//     itemUsuario1.innerHTML = `
//       <p><strong>Nome:</strong> ${usuario.first_name} ${usuario.last_name}</p>
//       <p><strong>Email:</strong> ${usuario.email}</p>
//       <img src="${usuario.avatar}" alt="Avatar do usuário">
//     `;
//     lisObj.appendChild(itemUsuario1);
//   }

//   document.body.appendChild(lisObj);
// })();

// ! innerHTML
//TODO: modificar o conteúdo HTML dentro do elemento selecionado
/* innerHTML: Esta propriedade permite modificar o conteúdo HTML dentro do elemento selecionado. 
Por exemplo, para modificar o conteúdo de um elemento com o ID "meuParagrafo": */

let h1 = document.getElementById("h1");
h1.innerHTML = "Este é um novo conteúdo para o H1.";
console.log(h1)



//! innerText ou textContent
//TODO modificar o conteúdo de texto dentro do elemento selecionado
/*innerText ou textContent: Estas propriedades permitem modificar o 
conteúdo de texto dentro do elemento selecionado. 
Por exemplo, para modificar o texto de um elemento com o ID "meuTitulo": 
*/

let h2 = document.getElementById("h2");
h2.textContent = "Este é um novo h2 textContent .";
console.log(h2)

let h3 = document.getElementById("h3");
h3.innerText = "Este é um novo h3 innerText.";
console.log(h3)



//! setAttribute
//TODO modificar qualquer atributo de um elemento HTML, incluindo o conteúdo do atributo
/*
setAttribute: Esta função permite modificar qualquer atributo de um elemento HTML, 
incluindo o conteúdo do atributo "src" de uma imagem ou o valor de um atributo personalizado. 
Por exemplo, para modificar o atributo "src" de uma imagem com o ID "minhaImagem":

*/
//! SRC
//TODO: MODIFICANDO SRC
//todo: Modificando o valor do atributo "src" de uma imagem:
let imagem = document.getElementById("img"); 
imagem.setAttribute("src", "agil.jpg");

//! HREF UM LINK
//TODO: MODIFICANDO HREF COM UM OU MAIS LINKS
//todo: Modificando o valor do atributo "href" de uma imagem:
let link1 = document.querySelector("a");
link1.setAttribute("href", "https://contabilidade.jotaempresas.com/");

//! HREF PELO ID
//todo: Observe que dentro dos parenteses podemos usar o CSS para identificar o ID
let link2 = document.querySelector("#id");
link2.setAttribute("href", "https://contabilidade.jotaempresas.com/");

//! HREF PELA CLASSE
//todo: Observe que dentro dos parenteses podemos usar o CSS para identificar o ID
let link3 = document.querySelector(".classe");
link3.setAttribute("href", "https://contabilidade.jotaempresas.com/");

//! HREF PELA TITULO
//todo: Definir o valor do atributo "title" de um elemento:
let elemento = document.querySelector("#t");
elemento.setAttribute("h3", "Meu Título Novo");
console.log(elemento)


//! HREF PELA STAYLE
//todo: Definir o valor do atributo "style" de um elemento:
let elemento1 = document.querySelector("#sty");
elemento1.setAttribute("style", "color: red; font-size: 16px;");
console.log(elemento1)


//! REMOVE
/*
remove: Esta função permite remover completamente um elemento HTML da página. 
Por exemplo, para remover um elemento com o ID "elementoARemover":
*/

//TODO: REMOVENDO USANDO O getElementById
let elemento4 = document.getElementById("remove2");
elemento4.remove();
//TODO: REMOVENDO USANDO O querySelector COM UMA ID
let elemento5 = document.querySelector("#remove4");
elemento5.remove();
//TODO: REMOVENDO USANDO O querySelector COM UMA CLASSE
let elemento6 = document.querySelector(".remove6");
elemento6.remove();
//TODO: REMOVENDO USANDO O querySelector COM UMA CLASSE
let elemento8 = document.querySelector(".remove8");
elemento8.remove();




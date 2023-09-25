const tipos_listados = ["joão", 26, "rua coronel josé do ó"]

// instalar npm install faker
// yarn add faker

console.log(tipos_listados)


// TIPIFICANDO

interface TIPIFICANDO {
    id:Number;
    nome_livro : string;
    autor_livro : string;
};

//todos: FORMAS DE DECLARAR ARRAY

// let Livros: Object[]=[];
let Livros: Array<TIPIFICANDO>=[];



Livros=[

    {   
        id:1,
        nome_livro : "Livro Nome1",
        autor_livro : "Autor"
    },
    {   
        id:2,
        nome_livro : "Livro Nome2",
        autor_livro : "Autor2"
    },

]


// Criar mais um livro

Livros.push(
    {   
        id:3,
        nome_livro : "livro3",
        autor_livro : "autor3"
    },
)

console.log(Livros)




/* 
Usando a notação de colchetes:

let array: any[] = []; // Array vazio
let array: number[] = [1, 2, 3]; // Array de números
let array: string[] = ["a", "b", "c"]; // Array de strings

*/

/*
Usando a interface Array<T>:

let array: Array<any> = []; // Array vazio
let array: Array<number> = [1, 2, 3]; // Array de números
let array: Array<string> = ["a", "b", "c"]; // Array de strings
*/




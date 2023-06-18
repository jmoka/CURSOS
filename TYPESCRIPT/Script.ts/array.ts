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


const Livros: TIPIFICANDO[]=[

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
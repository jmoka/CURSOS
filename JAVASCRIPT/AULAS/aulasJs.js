// TIPOS DE VARIÁVEIS 
// NÚMEROS, STRING, BOOLEANi (True, False), UNDEFINED(não está definido), NULL(serve para apagar uma informação de uma variável) 
let tipo_numero=1
let tipo_string="string"
let tipo_boolean=false
let tipo_nao_definido 

// VARIÁVEIS DE REFERENCIA ( objetos, array, funções)

// OBJETOS
// é uam variável que possui vais propriedades ou outras variáveis, na qual se refere ao objeto criado
// DENTRO DO OBJETO NÃO SE COLOCA O LET

let caneta = {
    nome:"caneta",
    tipo:"eferografica",
    cor:"azul",
    maraca:"bick"
}
console.log("OBJETO CANETA", caneta)
// PARA CHAMAR , OU BUSCAR UM PROPRIEDADE DO OBJETO
// ESTANCIANDO A PROPRIEDADE DO OBJETO
nome=caneta.nome
console.log('NOME PROPRIEDADE DE CANETA "ESTANCIANDO A PROPRIEDADE DO OBJETO":', nome)
// SEM FAZER O ESTANCIAMENTO
console.log('NOME PROPRIEDADE DE CANETA "SEM FAZER O ESTANCIAMENTO":', caneta.nome)

// TROCAR VALORES DE PROPRIEDADES DE DENTRO DE UM OBJETO
// PRECISA INFORMAR A PROPRIEDADE E TROCA O VALOR
caneta.nome="pen"
console.log("VALOR DO NOME DO OBJETO CANETA FOI ALTERADO PARA PEN: >>>", caneta.nome)


// USA-SE O NULL PARA APAGAR UM VALOR DE UMA VARIÁVEL
tipo_numero=null

// TYPEOF , é usado para mostrar na console o tipo dos objetos, ou das variáveis
console.log(typeof tipo_numero)

// CONSULTAR O TIPO DA VARIÁVEL COM TYPEOFF
console.log(typeof tipo_numero)
console.log(typeof tipo_string)
console.log(typeof tipo_nao_definido)

//!===============================================
// ARRAYS (lista , podenedo ser qualquer tipo)
//!===============================================

let pedro = "pedro"
let listaNumero=[1,2,3]

let lista=['paulo', 'jose', 'pedro', 2, true, 'carlos', pedro, listaNumero, [0,9,8] ]
console.log('NOSSA LISTA', lista)

// BUSCANCO UM ELEMENTO DE MA ARRAY ATRAVÉS DO INDEX
console.log('LISTA EDEX 2', lista[2])
// BUSCANDO UM ELEMENTO DE UMA LISTA DENTRO DE OUTRA
console.log('LISTA EDEX 7-0', lista[7][0])
console.log('LISTA EDEX 8-1', lista[8][1])
// SUBSTITUINDO UM ITEM DE LILSTA
lista[7][0] = "TROCOU PARA X"
lista[8][1] = "TROCOU PARA Y"

// MÉTODOS PARA PROCURAR ELEMENTO EM UMA STRING ( INDEXOF E INCLUDES)
//! MÉDOTO INDEXOF
//SERVE PARA ENCONTRA O INDICE DO LEMENTO QUE ESTA SENDO PROCURADO NA ARRAY
console.log('USANDO O INDEXOF PROCURANDO O NUMERO TÊS QUE ESTA NO INDICE:',listaNumero.indexOf(2))
//TODO: QUANDO Í INFORMADO UM VALOR QUE NÃO EXISTE RETORNA -1
//! MÉTODO INCLUDES
//SERVE PARA ENCONTRA O LEMENTO AO SER ENCONTRADO RETORNA TRUE, FALSE
console.log('USANDO O INCLUDE O ELEMENTO SE ENCONTRA NA ARRAY:',listaNumero.includes(2))
//TODO: QUANDO O VALOR É ENCONTRATO RETORNA TRUE SE NÃO FALSE

//! INSERINDO VALORES EM UMA ARRAY
//PARA ADICIONARMOS VALORES EM UMA ARRAY
// VAMOS UTILIZAR A LISTA num
// TODO: PUSH - NO FINAL DA ARRAY
let nun=[4,5]
console.log("LISTA ORIGINAL 4,5",nun)
nun.push(8,9,10)
console.log('INSERINDO NO FINAL DA ARRAY 8, 9 10', nun)
// TODO: UNSHIFT - NO INICIO DA ARRAY
nun.unshift(1,2,3)
console.log('INSERINDO NO INICIO DA ARRAY, 1,2,3', nun)
// TODO: SPLICE - NO MAIO DA ARRAY
//* PARA ESSA PROPRIEDADE PRECISAMOS INFORMAR TRÊS PARAMETROS
// O PRIMEIRO DE QUAL POSIÇÃO VAI INICIAL OU SEJA QUAL O INDEX, A PARTIR DE QUAL INDICE VAI INICIAR
// A SEGUNDA EÉ O SEGUINTE, VAI SER DELETADO ALGUM NUMERO, APÓS O INDEX, QUANTOS?
// NA TERCEIRA PEFRTE IONFORMAMOS OS NOSSOS ELEMNTOS NA ARRAY
nun.splice(5,0,6,7)
console.log('INSERINDO NO MEIO DA ARRAY, 6,7', nun)

//! ARRAY DE REFERENCIA
// PASSAMOS MAIS DE UMA INFORMAÇÃO DENTRO DE UMA ARRAY
const filmes=[
    {id:1, filmeNome:"Dejavu"},
    {id:2, filmeNome:"De volta para o Futuro"},
    {id:3, filmeNome:"Matrix"}
]
//todo: os valores são armazenados com referencias e para isso iremos usar o .FIND
// O . FIND E USADO COM UMA FUNÇÃO DENTRO DELE PARA RETORNAR O VALOR
// FOI CRIADO UMA VARIAVEL FilmeEscolhido onde colocamos o filme a ser vefificado
//*informamos a variavel filmes.find e criamos a função chamada filme, essa função retorna a função.a array de referencia filmes
// se ele for igual ao valor da variavel filme escolhido
// chamamos a variavel filme encontrado 
// Todo: quando não encontra o valor retorna  undefined
let filmeEscolhido="Dejavu"
filmeEncontrado=filmes.find(function(filme){
    return filme.filmeNome==filmeEscolhidoz
})
console.log("filme escolhido",filmeEncontrado)

//! ARROW FUNCTION  =>
//todo: SERVE PARA SIMPLIFICAR A SINTAX , REMOVENDO A FUNÇÃO E TEM O MESMO RESULTADO DO EXEMPLO ANTERIOR
let filmeEscolhido1="Dejavu"
filmeEncontrado1=filmes.find(filme => filme.filmeNome==filmeEscolhido)    
console.log("filme escolhido1",filmeEncontrado1)

//! REMOVER ITENS DA ARRAY
// PARA ISSO UTILIZAMOS O POP(), SHIFT() E O SPLICE(QUAL ITEM QUE VC QUER REMOVER ATRAVÉS DO INDEX , QUANTIDADE DE ITEM A SER REMOVIDO)

//todo: POP() PARA RETIRRAR O ULTIMO ITEM DA ARRAY
const lis23=[5,6,7,8]
const final=lis23.pop()
console.log("lis23 , RETIRANDO O ULTIMO ITEM DA ARRAY COM POP() LISTA PADRÃO 5,6,7,8,",lis23)
//*MOSTRANDO O ITEM REMOVIDO DA ARRAY
console.log("MOSTRANDO O ITEM REMOVIDO DA ARRAY COM O USU DO POP()", final)

//todo: SHIFT() PARA REMOVER O PRIMEIRO ITEM DA ARRAY
const lis29=[5,6,7,8]
const final2=lis29.shift()
console.log("lis29 , RETIRANDO O PRIMEIRO ITEM DA ARRAY COM SHIFT() LISTA PADRÃO 5,6,7,8,",lis29)
//*MOSTRANDO O ITEM REMOVIDO DA ARRAY
console.log("MOSTRANDO O ITEM REMOVIDO DA ARRAY COM O USU DO SHIFT()", final2)

//todo: SPLICE() PARA REMOVER QUALQUER ITEM DA ARRAY
//SPLICE(QUAL ITEM QUE VC QUER REMOVER ATRAVÉS DO INDEX , QUANTIDADE DE ITEM A SER REMOVIDO)
// nesse caso vai remover o 7 e o 8
const lis30=[5,6,7,8]
const final4=lis30.splice(2,2)
console.log("lis30 , RETIRANDO QUALQUER ITEM ATRAVÉS DO INDEX COM O USO DO SPLICE() LISTA PADRÃO 5,6,7,8, removeu o 7 e o 8",lis30)
//*MOSTRANDO O ITEM REMOVIDO DA ARRAY
console.log("MOSTRANDO O ITEM REMOVIDO DA ARRAY COM O USU DO splice()", final4)


//!=========================================
// FUNÇÕES (inicia com a paravra FUNCTION)
// PODE SER COM PARAMETROS OU NÃO
// SEM PARAMETROS
//!=========================================
function semStatos(){
    console.log("função sem parametro")
}
semStatos()

// COM PARAMETROS

function comParamentro(parametro1){
    console.log("função com parametro", parametro1)
}
comParamentro("joão")

// FUÇÃO QUE TIRA % DO VALOR DA VENDA

function desconto(valor, porcentagem){
    velaorPagar = valor-((valor*porcentagem)/100)
    return velaorPagar
}
// usando o sinal de + para fazer uma concatenação
// chama a função colocando o valor dela em uma variavel
let valorTotal = 500
let porcentagem = 10
let valorVenda=desconto(valorTotal, porcentagem)
let valorDesconto= valorTotal - valorVenda
console.log("ValorVenda: R$"+valorVenda)
console.log("valorDesconto: R$"+valorDesconto)

// OPERADOR DE ATRIBUIÇÃO = ( ATRIBUI UM VALOR A UMA VARIAVEL)
// PODE SER ACOMPANHADO COM UM OPERADOR MATEMATIVO
valorTotal +=  valorTotal
console.log("valorTotal +=", valorTotal)

valorTotal -=  porcentagem
console.log("valorTotal -=", valorTotal)

valorTotal *=  porcentagem
console.log("valorTotal *=", valorTotal)

valorTotal /=  porcentagem
console.log("valorTotal /=", valorTotal)


// OPERADOR DE IGUALDADE
// quando se quer comparar se duas coisas são do mesmo tipo ou tem o mesmo valor , ou as duas coisas juntas
// OPERADOR QUANDO QUEREMOS VER SE DOIS ELEMENTOS SÃO DO MESMO TIPO E POSSUI O MESMO VALOR , ===
let string1="2"
let numero1=2
// CHAMADO DE STRCT
// OPERADOR QUANDO QUEREMOS VER SE DOIS ELEMENTOS POSSUI TIPO E O MESMO VALOR ( nesse caso É FALSE pois são de tipos diferentes )
console.log("estring é do mesmo tipo e mesmo valor que numero :",string1===numero1)

// CHAMADO DE LOSE
// OPERADOR QUANDO QUEREMOS VER SE DOIS ELEMENTOS POSSUI O MESMO VALOR SEM SE IMPORTAR COM O TIPO , ==
string1="2"
numero1=2
// verificando se possui o mesmo valor( nesse caso É TRUE pois são de tipos diferentes )
console.log("estring é do mesmo valor que numero :",string1==numero1)

// OPERADOR QUANDO QUEREMOS VER SE DOIS ELEMENTOS SÃO DIFERENTES TIPOS DIFERENTES, !==
string1="2"
numero1=2
// verificando são diferentesr( nesse caso É TRUE pois são de tipos diferentes )
console.log("os elementos são diferentes :",string1!==numero1)



// OPERADORES MATEMÁTICOS
// VARIÁVEIS  (uma vez declarada a variável com LET não à necessidade de colocar o LET)
// sendo 0 para divisão exata
// sendo 1 para divisão não exata
// sendo retorno do dividendo menor que o divisor, retorna o valor do dividendo
let num1=2
let num2=3

// DECREMENTO(redução) E INCREMENTO , com o sinal de ++ OU --
// OPERADOR DE INCREMENTO , colocado no inicio na variável numérica
num1=++num1
console.log("VARIAVEL NUM1 ENCREMENTADA", num1)

// OPERADOR DE INCREMENTO , colocado no FIM na variável numérica
num1=num1++
console.log("VARIAVEL NUM1 ENCREMENTADA", num1)

// OPERADOR DE DECREMENTO(redução) , colocado no inicio na variável numérica
num1=--num2
console.log("VARIAVEL NUM1 DECREMENTO", num2)

// OPERADOR DE DECREMENTO(redução) , colocado no FIM na variável numérica
num1=num2--
console.log("VARIAVEL NUM1 DECREMENTO", num2)


// RESTODE DIVISÃO ONDE O RESULTADO RETORNA 1 OU 0
console.log("RETORNA O RESTO DA DIVISÃO", num1 % num2)

// EXPONENCIAL **
// USA-SE OS ** PARA REALIZAR CALCULO DE EXPONENCIAÇÃO
console.log("NUMERO NUM1 ELEVADO A NUM2",num1**num2)

// SOMA
num1=2
num2=3
console.log("operador lógico de SOMAR 2 + 3:  ", num1 + num2)

// SUBTRAÇÃO
num1=5
num2=3
console.log("operador lógico de SUBTRAIR 5 - 3:  ", num1 - num2)

// MULTIPLICAÇÃO
num1=2
num2=3
console.log("operador lógico de MULTIPLICAR 2 * 3:  ", num1 * num2)

// DIVISÃO
num1=10
num2=2
console.log("operador lógico de DIVIDIR 10 / 2:  ", num1 / num2)


// OPERADORES LOGICOS
// AND = && , OR=|| , NOT=!
// USANDO O AND = && , para esse operador precisa ser as duas condições verdadeiras para retornar true
let temTitulo =true
let maior18 = false

let podeVotar = temTitulo && maior18
console.log("podeVotar AND", podeVotar)

// USANDO O OR = || , para esse operador precisa ser uma das duas condições verdadeiras para retornar true
podeVotar = temTitulo || maior18
console.log("podeVotar OR", podeVotar)

// USANDO O NOT = ! , para esse operador precisa usar ! para inverter o resultado
console.log("podeVotar NOT OR", !podeVotar)

// OBS: QUANDO SE USA O OPERADOR LÓGICO AND, O RETORNO SERÁ SOMENTE QUANDO AS DUAS OU MAIS SITUAÇÕES FOREM VERDADEIRAS
// OBS: QUANDO SE USA O OPERADOR LOGICO OR, ELE IRÁ RETORNAR QUANDO ELE ACHAR A INFORMAÇÃO VERDADEIRA OU SEJA:
// SE TIVER 10 SITUAÇÕES PARA SER VERIFICADA E ELE ACHAR A VERDADEIRA NA PRIMEIRA POSIÇÃO ELE PARA DE PROCURAR O RESTANTE
// ISSO ACONTECE NA POSIÇÃO QUE ELE ACHAR OU SEJA SE ACHAR NA 5 NA 6 , ELE PARA E NÃO CONFERE O RESTANTE



// DECLARAÇÕES CONDICIONAIS

// OPERADOR TERNARIO ( RESOLVE QUESTÕES DE COMPARAÇÃO)
// com operador ternario retorna no primeiro paramentro True e no segundo False
// ou seja se  a questão antes da ? for verdadeira retorna o primeiro parametro
// ESTRUTURA variavel = a questão a ser resolvida ? 'resultado verdadeiro ':'resiltado falso'
let velocidadeCarro = 110
let velocidadeBarreira= velocidadeCarro > 110 ? 'passou a velocidade': "velocidade padrão" 
console.log("velocidadeBarreira: ",velocidadeBarreira)



// IF , ELSE IF, ELSE
// ESTRUTURA BASICA 
let velocidadePermitida=39
let velocidadeOK= "Velocidade Permitida"
let velocidadeOf= "Velocidade Não Permidida"
let velocidadeLoow= "Velocidade Muito Baixa"

if (velocidadePermitida >= 40 && velocidadePermitida <= 80){
    console.log(velocidadeOK)
}
else if (velocidadePermitida>80){
    console.log(velocidadeOf)
}
else
    console.log(velocidadeLoow)


// SWITCH , CASE e DEFAULT
// ENCONTRAR E TROCAR ALGUMA COISA
// SWITCH , TROQUE QUANDO ENCONTRAR O CASO

// IMPORTANTE RESSALTAR QUE E NECESSÁRIO TER O BREAK, PARA ELE PODER PARA NA POSIÇÃO ENCONTRADA, SENÃO ELE VAI CONTINUAR PROCURANDO

// ESTRUTURA
let profissional = "joão"

switch(profissional){
    case "paulo":
        console.log("pedreiro")
        break    
    case "adriana": 
        console.log("arquiteta")
        break
    case "jose":
        console.log("engenheiro")
        break
    default:
        console.log("Não encontrei o Profissional")
}

// FOR LOOP
// ESTRUTURA É FORMADA DA SEGUINTE FORMA
// FOR ( VARIAVEL ,CONDIÇÃO, INCREMENTO)
// variavel =i
// condição = i<=10
// incremento i++ ou seja valor de i mais 1
// dentro do for loop é que a variável está dentro da sintex
for (i =10; i<=20; i++)
    console.log("Numero for loop: ", i)



// FOR IN LOOP
// VERIFICA OS ITENS DE UMA ARRAY, DE UM OBJETO
const pessoa={
    altura:1.80,
    nome_Ob:"João",
    sexo:"masculino"
}

for (i in pessoa){
    // OBSERVE QUE DESSA FORMA O FOR BUSCA EXATAMENTE O TITULO DOS ATRIBUTOS
    console.log("objeto pessoa", i)
    // OBSERVE QUE DESSA FORMA O FOR BUSCA EXATAMENTE O CONTEUDO DOS ATRIBUTOS
    console.log("objeto pessoa", pessoa[i])
    // OBSERVE QUE DESSA FORMA O FOR BUSCA EXATAMENTE TANTO O TITULO DO ATRIBUTO QUANTO VALOR O CONTEUDO DO ATRIBUTO
    console.log("objeto pessoa", i, pessoa[i])
}

let arraY=["maria","joão","pedro","paulo"]
for (i in arraY){
    // OBSERVE QUE DESSA FORMA O FOR BUSCA EXATAMENTE O INDEX
    console.log("ArraY INDEX", i)
    // OBSERVE QUE DESSA FORMA O FOR BUSCA EXATAMENTE O CONTEUDO DOS ATRIBUTOS
    console.log("Array VALORES", arraY[i])
    // OBSERVE QUE DESSA FORMA O FOR BUSCA EXATAMENTE TANTO O TITULO DO ATRIBUTO QUANTO VALOR O CONTEUDO DO ATRIBUTO
    console.log("Array INDEX", i +" "+ "e VALORES", arraY[i])
}

// FOR OF LOOP
// OBSERVE QUE ELE RETORNA O MESMO RESULTADO QUE "console.log("Array VALORES", arraY[i])" DO EXEMPLO ANTERIOR
// RETORNA EXATAMENTE O VALOR DE CADA ITEM DE TENTRO DA ARRAY
for (ii of arraY){
    console.log("ArraY OF", ii)
}

// No while loop a variável está do lado de fora da sintex
// WHILE LOOP
x=11
while (x>10){
    console.log("loop while", x)
    break
}

// WHILE LOOP COM IF E ELSE
// IMPORTAANTE RESALTAR QUE POSE COLOAR CONDIÇÕES DENTRO DO LOOP
// OBSERVE O USO DO BREAK PARA PARA O LOOP
// O RESULTADO RETORNA EXATAMENTE O VALOR DA CONDIÇÃO INFORMADA OU ELSE SE FOR DIFERENTE
// A CONDIÇÃO DENTRO DO WHILE SEMPRE É VERDADEIRA
x=10
while (true){
    if (x===10) 
        console.log("loop while IF", x)
        
    else
        console.log("loop while ELSE", x) 
        break        
    }

// WHILE COM BREAK
// ESSA SITUAÇÃO É INTERESSANTE POIS RETORNA TODOS OS ELEMENTSO ATE ENCONTRA O ELEMENTO DESEJADO E PARA
// OU SEJA FAZ UM LOOP RETORNA ITEM A ITEM E QUANDO ENCONTRAO QUE PROCURA PARA DE PROCURAR, RETORNANDO TODOS OS ELEMENTOS
// É BEM SIMPLES, É SÓ ACRESCENTAR O BREAK APÓS O IF 
// NESSE CASE PRECISA USAR O ENCREMENTO PARA IR SOMENTO VALOR DO X E QUANDO CHEGAR EM 10 ELE PARA
x=1
while (x<=10){
    if (x===10) break
        console.log("loop while BREAK", x)   
        x++         
}   

//DO WHILE
// A VARIÁVEL É DECLARADA FORA DA SINTAX
// PRIMEIRO SE DECLARA QUAL A AÇÃO
// DEPOIS A CONDIÇÃO
i=11
do {
    console.log("loop do while", i)
    break
} while (i>10)

// INSERIR UM TEXTO NO CORPO DO HATML ATRAVÉS DO JAVASCRIPT
// USANDO O ESSE ATRUBUTO "DOCUMENT.GETELEMENTBYID("NOME DA ID LA NO HTML").INNERHTML = "COMOLAR O NOME QUE DESEJA OU O NOME DA VARIÁVEL"
// DESSA FORMA O JAVA INSERE NO LOCAL INDICADO O QUE VOU PASSADO
let titulo="Transferindo valor do JavaScrip para a tag no HTML"
document.getElementById('textCabecalho').innerHTML=titulo


//==================================================================
//OBJET ORIENTED PROGRAMMING

// ORIENTAÇÃO ORIENTADA A OBJETO
//=================================================================
// OBJETOS
// PARA CRIAR UM OBJETO BASTA CRIAR UMA VARIAVEL E DENTRO DO OBJETO COLOCAR SEUS ATRIBUTOS
let book={
    titulo: "titulo do livro",
    paginas:34,
    autor:"joão"
}
console.log(book)

// OBJETOS COM UMA PROPRIEDADE COM MULTIPLAS PROPRIEDADES
let book1={
    titulo: "titulo do livro",
    paginas:34,
    autor:"joão",
    capitulos:{
        cap1:"cap1",
        cap2:"cap2"
    }

}
console.log(book1)

// OBJETOS COM UMA PROPRIEDADE COM MULTIPLAS PROPRIEDADES E UMA FUÇÃO
let book2={
    titulo: "titulo do livro",
    paginas:34,
    autor:"joão",
    capitulos:{
        cap1:"cap1",
        cap2:"cap2"
    },
    imprimirBook: function(){
        return console.log("imprimindo......")
}
}
imprimir=book2.imprimirBook()



// =======================================================================

// FACTORY

//========================================================================
// AS FACTORTY SERVEM PARA CRIR OBJETOS
// CRIA-SE UMA FUNÇÃO E DENTRO DA FUNÇÃO COLOCAMOS O NOSSO OBJETO E AO FINAL TEMOS QUE COLOCAR O RETURN
function criandoBook(titulo, pagina, autor){
    let book0 = {

        titulo:titulo,
        paginas:pagina,
        autor:autor
}
return book0
}

x=criandoBook("book x", 340, "joão")
console.log(x)

xx=criandoBook("book xx FACTORY", 500, "pedro")
console.log(xx)


// ADICIONAR PROPRIEDADAS NO OBJETO SEM ALTERAR A SINTAX ORIGINAL
// Primeiramente tem que fazer o estanciamento do objeto
xxx=criandoBook("book xxx ADICIONANDO NOVA PROPRIEDADE", 500, "pedro")
xxx.color="white"
console.log(xxx)

//===========================================

// CONSTROCTOR

//===========================================
// IGUALMNETE AS FACTORY AS CONSTROCTOR SERVEM TEMBEM PARA CRIR OBJETOS , PORÉM COM MENOS CÓDIGO
// DEMVEM INICIAR COM A LETRA MAIUSCULA
function CriandoBook1(titulo, pagina, autor){
        this.titulo=titulo;
        this.paginas=pagina;
        this.autor=autor
}
C= new CriandoBook1("book CONSTROCTOR", 340, "joão")
console.log(C)


//===========================================

// Built in Objects
//! SITE DOCUMENTAÇÃO
//*https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#veja_tamb%C3%A9m
// NESSE SITE TEM A DOCUMENTAÇÃO 
//===========================================
// TODO: MATH
console.log(Math.min(1,3,5,7,15,8,9))
console.log(Math.max(1,3,5,7,15,8,9))

// TODO: STRING

let msg= "meu nome é joão tavares"

// verificar se inicia com
console.log(msg.startsWith("me"))
// verificar se termina como
console.log(msg.endsWith("es"))
// verificar se inclui com
console.log(msg.includes("é"))



//===========================================
// TEMPLATE
// AS TEMPLATES SERVE OARA VOCE DEMOSNTRAR EM SEU CODIGO COMO EXATAMENTE ESTA APARECENDO 
// USANDO AS CRASES AO INVES DE ASPAS
//===========================================

let email=`Olá tudo bom?
Me chamo joão tavares e esse email é um teste.
profavor não responda!!
`
console.log(email)

// TODO: DIFERENTE DE QUANDO USA AS ASPAS , POIS O TESTO NÃO TEM COMO QUEBRAR A LINHA A NÃO SER COM \n

let email2="Olá tudo bom?\nMe chamo joão tavares e esse email é um teste.\nprofavor não responda!!"
console.log(email2)

//===========================================
// DESAFIO 2
// SOLICITAR UM VALOR PARA O USUARIO 
// TODO: USANDO O METODO pronpt
// * O valor inserido no prompt pelo uisuario ele é uma string
// e a mesma pode ser convertida no caso para Number
//===========================================

let value =Number(prompt("entre com um numero"))

// Nesse desafio iremos usaor o que ja aprendemos 
// vamos o valor inserido pelo usuario será armazenado na variavel e a 
// mesma é passada para o html
// Todo: o primeiro não usa variável o segundo usa uma variável
let texto2="Não foi aprovado"
if (value >=20){
    
    document.getElementById('valorUsuario').innerHTML='Foi Aprovado'
  
}
else {
    document.getElementById('valorUsuario').innerHTML=texto2
}























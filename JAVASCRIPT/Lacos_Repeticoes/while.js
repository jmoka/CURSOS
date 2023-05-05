/*
! while

O loop "while" é outra estrutura de controle de fluxo em JavaScript. 
Ele é usado quando você quer executar um bloco de código repetidamente, enquanto uma determinada condição é verdadeira. 
O bloco de código é executado repetidamente até que a condição se torne falsa.

SINTAX
while (condição) {
   bloco de código a ser executado enquanto a condição for verdadeira
   interação ou ação
}

É o seguinte:
- No WHILE primeiro e verificada a CONDIÇÃO ou seja a condição é verificada se a condição no primeiro loop for falsa , não é 
executado nenhuma ação, mas se a condição for verdadeira e se mantiver verdadeira em todas as voltas do loop a ação e executada.
A continuará sendo executada até que encontre a condição falsa

 */

// ! EX. 1
let contador = 0;

while (contador < 5) {
  contador++;
  console.log("WHILE",contador);
}
//todo : Observe que o loop acaba quando a condição contador for menor que 5


/*
! Do while

O loop "Do while" igualmente o while  é outra estrutura de controle de fluxo em JavaScript. 
Possui três diferenças fundamentais.

* 1 - Sintax
Sua sintax é a seguinte:
- No DO WHILE primeiro e verificada a ação ou seja executa a ação no primeiro loop, e depois verifica a condição 
se a condição  no segundo loop for falsa não é mais ezecutado a ação, mas se a condição me mantiver verdadeira 
a ação é ezecutada e segue o loop ate que a condição seja falsa

DO{

  bloco de código a ser executado enquanto a condição for verdadeira
  interação ou ação

}while(condição);


* 2 - RESULTADO
NO PRIMEIRO LOOP DO WHILE SE A CONDIÇÃO FOR FALSA NÃO É EXECUTADO NENHUMA AÇÃO,
JÁ NO DO WHILE NO PRIMEIRO LOOP SE A CONDIÇÃO FORM FALSA É EXECUTADO A PRIMEIRA AÇÃO!

 */

// ! EX. 1
let contador1 = 0;

do {
  contador1++;
  console.log("DO WHILE",contador1);
}while (contador1 < 5)
//todo : Observe que o loop acaba quando a condição contador for menor que 5

///////////////////////////////////////////////////////////////////////////////

//! DIFERENÇA DO RESULTADO NO PRIMEIRO LOOP

let x=0
while(x>1){
  x++
  console.log("x é = ", x)
}console.log("fim do Programa")
//*Notem que é fim do programa , ou seja x não é maior que 1 FALSE, e por isso no primeiro loop, não executa a ação , pois a condição é testada primeiro

do{
  x++
  console.log("x é = ", x)
}while(x>1) 
console.log("fim do Programa")
//* Notem que primeiro a ação foi executada, depois foi verificado a condição, e no segundo loop já não mais executa
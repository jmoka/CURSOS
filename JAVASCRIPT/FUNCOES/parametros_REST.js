function somar(...numeros) {
    let res = 0;
    let i = 0;
    let tamanho = numeros.length;    
    for (i = 0; i < tamanho; i++) {
      res += numeros[i];
      
    }
    return `Function normal, Resultado soma de ${numeros} = ${res}`;
    
  }
  
  console.log(somar(3, 3, 5));
  





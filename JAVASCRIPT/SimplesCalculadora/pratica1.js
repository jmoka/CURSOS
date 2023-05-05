let nun1 = Number(prompt("Insira o Primeiro Número"))
let operacao = prompt("informe a operação  + , - , / , * " )
let nun2 = Number(prompt("Insira o Segundo Número"))


function resultado1(nun1,nun2,operacao){

    if (operacao=="+") {
        let soma = nun1+nun2
        console.log("Resultado da soma de "+nun1+" + "+nun2+" igual a = "+ soma);

        //!armazenando o resultado em uma variável
        rsoma="Resultada da soma de "+nun1+" + "+nun2+" igual a ="+ soma
            
        document.write("Resultado da soma de "+nun1+" + "+nun2+" igual a = "+ soma);
        
        //!realizando a manipulação do dom , trocando o valor da id resultado
        document.write(resultado.innerHTML=rsoma)  

    }else if(operacao=="-"){
        let subtrair = nun1-nun2
        console.log("Resultado da subtração de "+nun1+" - "+nun2+" igual a = " + subtrair);
        document.write("Resultada da subtração de "+nun1+" - "+nun2+" igual a = "+ subtrair);

    }else if(operacao=="/"){
        let dividir = nun1/nun2
        console.log("Resultado da divisão de "+nun1+" / "+nun2+" igual a = "+ dividir);

        document.write("Resultada da divisão de "+nun1+" / "+nun2+" igual a = "+ dividir);

    }else if(operacao=="*"){
        let multiplicar = nun1*nun2
        console.log("eResultado da divisão de "+nun1+" * "+nun2+" igual a = "+ multiplicar);
        document.write("Resultada da divisão de "+nun1+" * "+nun2+" igual a = "+ multiplicar);

    } else {
        console.log("informaçõe não validas tente novamente")
        document.write("informaçõe não validas tente novamente")
    }


}

resultado1(nun1, nun2, operacao  )
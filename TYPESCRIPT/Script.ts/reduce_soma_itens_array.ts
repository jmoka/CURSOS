// const numeros: number[] = [2,8,9,10,23,13,1];
const numeros: Array<number> = [2,8,9,10,23,13,1];

// somar os itens do arrai

const soma = ():number => {
    return numeros.reduce((soma:number, itens:number)=>soma+itens,0)  
}

console.log(soma())


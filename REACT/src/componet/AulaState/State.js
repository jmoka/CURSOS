
import React, {useState} from "react";

export default function ReactFunction(){   
  
    let numb = 1
    const [num, setNum] = useState(numb); //  criada a state , onde o primeiro parametro é o stado, e o segundo o nome da função que irá alterar o estado

   const func = ()=>{       
           
        setNum(num +1)
   }  
   
  

   return (
        <>     
            <h1>Variavel numb: {numb} </h1>    
            <h1>valor do state : {num}</h1>      
            <button onClick={func}>Botao </button>
       </>
    )
}
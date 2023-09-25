# Instalação Inicial
## 1 - Criando arquivo package.json
    # npm init -y
## 2 - Instalação das Dependencias de desenvolvimento -D
### - instalações 
    - typescript podendo ser instalado globalmente 
    - ts-node-dev : Observador, geratodos os arquivos e mostra no terminal
    - tipos do node , @types/node
#### instalar tudo
    npm i -D typescript ts-node-dev @types/node 
## 3 - configurar o script no arquivo package.json


 {
  "name": "aulas_hcode",
  "version": "1.0.0",
  "description": "",
 
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only .src/index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.4.1",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.1.6"
  }
}


  obs:
  --respawn 
    => o ts node fica observando as alterações e faz tranpilação novamente

  --transpile-only 
  => fas a tranpilação apenas do arquivo de entrada, impede que o typescript olhe apenas para o arquivo para transpilação, passanno o caminho do arquivo 

  .src/index.ts
  => caminho passado para a trnspilação ( pode criar o caminho e o arquivo em qualquer lular desde que o camonho esteja correto)

  dev 
  => nome o script


## 4 -  Testando o transpilador 
### abra o terminal na pasta do projeto e digite o seguinte:
    - npm run dev 

## 5 - verificar retorno
### após esse comando não deve apresentar erro , ceve apresentar as informações, ex:
    > aulas_hcode@1.0.0 dev
    > ts-node-dev --respawn --transpile-only ./src/index.ts

    [INFO] 13:20:10 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 5.1.6)
## 6 - o traspilador ja esta funcionando
    todas as mudanças feitas no arquivo index.ts será mostrada no terminal, possibilitando ver a execuxão.


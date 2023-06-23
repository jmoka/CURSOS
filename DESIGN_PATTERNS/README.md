# TypeScript em seu projeto
    O TypeScript está disponível como um pacote no registro npm disponível como "typescript".

    Você precisará de uma cópia do Node.js como ambiente para executar o pacote. Em seguida, você usa um gerenciador de      dependências como npm , yarn ou pnpm para baixar o TypeScript em seu projeto.

# NPM

    npm install typescript --save-dev

## YARN
    yarn add typescript --dev


# Instalando globalmente o TypeScript

   Instalando globalmente o TypeScript Pode ser útil ter o TypeScript disponível em todos os projetos, geralmente para testar ideias pontuais. A longo prazo, as bases de código devem preferir uma instalação em todo o projeto em vez de uma instalação global para que possam se beneficiar de compilações reproduzíveis em diferentes máquinas.

## NPM
    npm install -g typescript

### Escolhendo uma Versão especifica do Typescript
     npm install -g typescript@4.1.3

# TypeScript usando um dos seguintes comandos:

## NPM
    npx tsc

## YARN    
    yarn tsc

# Escolhendo a Versão do Compilador
## verificando as Flegs
    tsc --help,
    tsc -h
## Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.
    tsc -t ES2020 , 
    tsc --target ES2020   
## Criando o TSCONFIG.JSON
    tsc --init
## Criando pastas separadas para os Arquivos TS e JS
    saidaScript
    Script

### No arquivo TSCONFIG.JSON recem criado, habilte o outDir e rootDir
     "outDir": "./saidaScript",                      
     "rootDir": "./Script",        

### Abra duas Abas no terminal
#### Informe o Caminho da pasta saidaScript e rode os arquivos sempre informando NODE e nome f=do arquivo.js
    node index.js
#### Informe o Caminho da pasta Script e rode os arquivos sempre o comando: para Compilar o Arquivo em JS
    tsc

## Configuração Básica do tsconfig.json
     "target": "ES2020",                          
     "module": "commonjs",                     
     "lib": ["DOM", "es6"],                             
     "sourceMap": true,   
     "allowJs": true,  
     "outDir": "./saidaScript.js",
     "rootDir": "./Script.ts",
     "removeComments": true,
     "strict": true,
     "esModuleInterop": true,
     "skipLibCheck": true,
     "forceConsistentCasingInFileNames": true

# Atualizar a Compilação Automaticamente
## Deixa o comando tsc na espera de uma atualização
    tsc --watch
                    




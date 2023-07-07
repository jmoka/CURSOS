# uma variável de ambiente em JavaScript sem que ela apareça no código, você precisará fazer isso em um ambiente externo ao JavaScript, como o sistema operacional ou um arquivo de configuração. Um exemplo comum é utilizar um arquivo .env em conjunto com uma biblioteca como o dotenv para carregar variáveis de ambiente de um arquivo. Instale a biblioteca dotenv usando o npm (ou yarn):

    npm install dotenv

# Crie um arquivo .env no diretório raiz do seu projeto e defina as variáveis de ambiente desejadas. Por exemplo:
    MINHA_VARIAVEL=valor-da-variavel
    OUTRA_VARIAVEL=outra-valor

# No seu código JavaScript, carregue as variáveis de ambiente do arquivo .env usando o dotenv:
    require('dotenv').config();

    // Agora você pode acessar as variáveis de ambiente definidas no arquivo .env
    console.log(process.env.MINHA_VARIAVEL);
    console.log(process.env.OUTRA_VARIAVEL);

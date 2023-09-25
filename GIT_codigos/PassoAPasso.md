## AJUDA
## GERAL

	git help
	
## COMANDOS ESPECIFICOS

    git help status
	git help add
	git help commit
	git help <qualquer_comando_git>	

## LISTA DE COMANDOS

    git help -a
    git help -g

# ====================================================================
# CRIE SUA CONTA NO GIT
    APÓS CRIAR SUA CONTA, CRIE UM REPOSITÓRIO !!

# CONFIGURAR SEU USUÁRIO NO GIT
    IMPORTANTE , TEM QUE CRIAR UM USUÁRIO E EMAIL QUE SE USA NO GIT
    - SE QUIZER ATUALIZAR É SÓ USAR O MESMO COMANDO COM VALORES ATUALIZADOS

    git config --global user.name "<novo-nome-usuario>"
	git config --global user.email <novo-valor>

    Após isso verifique as configurações

    git config --list

## DELETAR O USUARIO E EMAIL PARA CORRIGIR

    git config --global --unset user.name
	git config --global --unset user.email

    Após isso verifique as configurações, E OBSERVE SE FOI DELETADO!!

    git config --list

# CRIANDO CHAVE SSH NO COMPUTADOR E CONFIGURANDO NO GIT
### GERAR CHAVE PUBLICA
	- Isso irá gerar uma nova chave SSH RSA com o tamanho de bits 4096. Substitua "seu_email@example.com" pelo seu endereço de e-mail associado à sua conta.

USAR UM OU OUTRO: - dependendo do sistema operacional caso de erro tente o outro !!

	1 - 	ssh-keygen -t ed25519 -C "your_email@example.com"
	2 - 	ssh-keygen -t rsa -b 4096 -C "your_email@example.com"


	- Após executar o comando será solicitado que informe uma senha e confirme , caso não queira é so aperter ENTER
	
### COPIANDO CHAVE
	Get-Content $HOME\.ssh\id_ed25519.pub | Set-Clipboard

	ou

	Abra a pasta .ssh
		- Normalmente a .ssh fica localizada em :
			C:\Users\nome_usuario_no_sistema\.ssh
		Abra ao arquivo Public no bloco de notas e copie a chave !!

# CRIE UMA PASTA NO COMPUTADOR
    ABRA O TERMINAL NO CAMINHO DA PASTA E DIGITE O COMANDO
# CRIA NO COMPUTADOR UM REPOSITORIO GIT
    git init
# VERIFICA OS ARQUIVOS ALTERADOS
    git status
# ADICIONA PARA O COMMIT TODAS AS ALTERAÇÕES FEITAS
    git add .
# FAZ O COMMIT DE TODAS AS ALTERAÇÕES ADICONADAS COM UMA MAS
    git commit -m "escrever a msg"
# RENOMEIA O BRANCH PARA O PADRÃO DO GIT PARA MAIN
    git branch -M main
# CONECTA SEU REPOSITORIO LOCAL COM O REPOSITÓRIO REMOTO
    git remote add origin git@github.com:usuario/nomeRepositorio.git

    exemplo : 
    git remote add origin git@github.com:jmoka/cursoJava.git

# ATUALIZE AS INFORMAÇÕES COM O REPOSITORIO REMOTO ANTES DE COMMITAR

    git pull origin main

    Obs: caso tenten mesclar duas branches que não têm um histórico de commits comum, como quando você está trabalhando com um repositório recém-criado ou clonado, use o comando para atualizar as pastas.

    git pull origin main --allow-unrelated-histories
# ===================================================================================

# O PRIMEIRO COMMIT FEITO 
    git push -u origin main

## APÓS ISSO USE MOMENTE OS COMANDOS PARA ENVIAR UM ARQUIVO PARA O REPOSITORIO REMOTO
    git status
    git add . 
    git commit -m "msg"
    gil push

### ===================================================================================

# CLONAR UM REPOSITÓRIO DO GITHUB
Para clonar um Repositório remoto para o Git Local seguimos os seguintes passos:
1 -  Cria uma pasta em seu computador e abra o caminho da pasta no terminal
2 -  Copie a chave SSH no repositório remoto que vc deseja Clonar 
3 -  execute o comando no terminal

    git clone chave_ssh

Qual a diferença entre clonar e fazer o dowloads do repositório
- Quando se clona , temos duas caracteristica principal , ser mais seguro e copia as versões ou seja os commits
- Quando de faz o dowloads copia somento o codigo fonte atual

### ===================================================================================
# MOSTRAR O HISTORICO DAS VERSOES - OS COMMITES FEITOS
git log --oneline

### ===================================================================================
# GIT STATUS
    git status

    -Breve explicação : 
        - Esse comando nos mostra se houve modificação, exclusão ou se existe algium arquivo que não foi rastreado ou seja um arquivo novo.

        As informações vem listadas comos seguintes cabeçalho:

        - modified
            - Significa que ouve modificação
        - untracked
            - Significa Arquivo Novo -  ou Não Rastreado
        - deleted
            - Arquivo Deletado
### =====================================================================================
# GIT ADD (ADICINAR OS ARQUIVOS NO STAGED PRONTOS PARA COMMITAR)

## SELECIONAR ARQUIVO
### SELECIONAR OS ARQUIVOS QUE SERÃO ADICIONADOS NO STAGED
    1 - Primeiro faça um :

        git status

    -Verifique quais arquivos estão em (midified e em untracked)
    - Escolha qual arquivo vai ser adiconado

        git add nome_do_arquivo.text

## SELECIONAR UM DIRETÓRIO
- Lembre de fazer git status

    git add nome_diterorio

## PARA ADICONAR TODOS OS ARQUIVOS
    1 - Faça um :

        git status 

    - confira se existem arquivos mudados, ou não rasteados-novos

    2 - adicione todos

        git add .
    
## RETIRAR O ARQUIVO DO STAGED - ARQUIVOS JA ADICONADOS
    1 - Sempre primeiramente fazer:

        git status

    2 - retirar do staged

        git reset

## ADICIONAR ARQUIVOS QUE ESTÃO LISTADOS NO  .gitignore (geral ou do repositório)	.
	Caso queira adicionar um arquivo que esteja listado no .gitignor use o comando abaixo

	git add -f arquivo_no_gitignore.txt

# ===============================================================

# COMMIT
-É uma operação que registra um conjunto de alterações feitas nos arquivos do seu repositório. Cada commit é uma unidade de registro das mudanças e é acompanhado de uma mensagem que descreve o que foi feito. 
- VERSÃO
- Após adicionar os arquivos no staged , esles estarão prontos para serem comitados , ou seja gera uma nova versão 
- Essa versão é numerada
- O comando é o seguinte

        git commit -m "mensagem_titulo_do_commit"

## DESFAZER O ULTIMO COMMIT , CRIAR NOVO COMMIT E MANTER ARINFORMAÇÕES DO COMMITE ATUAL
-É uma operação do Git que permite desfazer o commit mais recente, mantendo as alterações dos arquivos no seu diretório de trabalho (working directory) e deixando essas alterações na staging area. Vou explicar cada parte do comando:

    1 - Não esquecer de verificar o status:

        git status
    
    2 - Código para a ação:

        git reset --soft HEAD~1


-   --soft: Esta opção do comando "git reset" indica que você deseja realizar um reset "soft". Isso significa que o Git desfará o commit, mas manterá as alterações dos arquivos no diretório de trabalho e as adicionará à staging area. Essencialmente, ele "desfaz" o commit, mas deixa você pronto para criar um novo commit com as mesmas alterações.

## VOLTAR A UM COMMITE ESPECÍFICO, E DELETAR DEFINITIVAMENTE AS ALTERAÇÃO ANTERIORES
### PERIGOSO NÃO TEM VOLTA


    1 - Verifique os commites já feitos

        git log --oneline
    
    2 - Escolha o código co commite que queira voltar, tenha atenção, os comites anteriores serão deletados!!

        git reset --hard codigo-commit

        ou

        git reset --hard HEAD~N 

                EXEMPLO :

                    git reset --hard HEAD~1
                    git reset --hard HEAD~2
                    git reset --hard HEAD~3

                    E ASSIM POR DIANTE !!
## CONSULTANDO HISTÓRICO DOS COMMITES
    - O comando git log --stat é usado para exibir o histórico de commits do repositório Git, juntamente com estatísticas resumidas de alterações (mudanças) em cada commit. Aqui está a explicação de como funciona esse comando:
    
        git log --stat	

    - O comando git log --pretty=oneline é usado para exibir o histórico de commits de um repositório Git de forma simplificada e concisa, apresentando cada commit em uma única linha. Aqui está a explicação de cada parte do comando

        git log --pretty=oneline

	- Este comando também exibe o histórico de commits no formato "oneline", mas a diferença está na formatação. A saída é semelhante à opção --pretty=oneline, mas não inclui informações adicionais, como a indicação da branch atual

        git log --oneline

## REMOVER UM ARQUIVO DO STAGING E DEIXA DE RASTREAR
    1 - Verificar o satatus :

        git status

    2 - Verificar os Commits
    
        git log --oneline

    3 - Executar o comando

        git rm --cached <nome-arquivo>
    


# ====================================================================================
# CONSULTAR A DIFERENÇA ENTRE ARQUIVOS MODIFICADOS
## DIFERENÇA DE TODO O DIRETÓRIO
- Quando você executa simplesmente "git diff" no seu terminal, o Git irá comparar as alterações entre os arquivos no seu diretório de trabalho (working directory) e o último commit no seu branch atual.
    
    git diff 

## DIFEREÇA UM ARQUIVO ESPECÍFICO
- Se você deseja verificar as diferenças em um arquivo específico

    git diff arquivo.txt

## ENTRE DOIS COMMITS
- comparar as diferenças entre dois commits específicos. Para isso, você precisa fornecer os hashes (ou abreviações) dos dois commits que deseja comparar.

    git diff abc123 def456

## DENTRO DO STAGED - JA ADICIONADOS
- Se você já adicionou arquivos à área de preparação (staging area) usando "git add", mas ainda não os confirmou com "git commit", você pode usar "git diff --staged" ou "git diff --cached" para visualizar as diferenças entre o que está na staging area e o último commit.

    git diff --staged

### =====================================================================================
# GIT CHECKOUT
- MODIFICA TEMPORARIAMENTE OS COMMITS E OS BRANCHS

Obs: Feito isso seu projeto ira mudar , ira retornar todos os arquivos ou mudanças feitas exatamente para o commite referenciado.

OBS: SUPER IMPORTANTE -  AO USAR O CHECKOUT RETORNANDO PARA VERSÕES ANTERIORES , É IMPORTANTE NÃO MUDAR NADA , NÃO FAZER ALTERAÇÃO NENHUMA, NÃO PODE FAZER ALTERAÇÃO!!


1 - Precisa entender que o checkout em se tratando de commit podemos navegar entre os commits feitos, ou seja:
DENTRO DE UM BRANCH EXISTEM VARIOS COMMITS E PODEMOS NAVEGAR ENTRES ESSES COMITES USANDO O CHECKOUT!

TEMSO UM PROJETO QUE POSSUI 5 COMMITS.

O ULTIMO COMMITE ENVIADO O MAIS ATUALIZADO SE CHAMA HEAD E TODOS OS COMMITS GANHAM UMA NUMERAÇÃO INCLUSIVE O HEAD

12334   - HEAD -  COMMIT ATUAL
3456    - "COMITE 3" 
12333   - "COMMIT 2"
37765   - "PRIMEIRO COMMIT"

PARA COM QUE OU POSSA NAVEGAR , VER, E VOLTAR PARA QUALQUER COMMIT JA FEITO USE O COMANDO:

### ESCOLHENDO UM COMMIT USANDO A NUMERAÇÃO DO COMMIT
    1 -  Verificar os códigos do commit

        git log --oneline
    
    2 - Executar o comando

        git checkout nuemro_commit

### ESCOLHENDO UM COMMIT USANDO HEAD~N
    Usando ~ podemos escolher o commite anterior o do HEAD, sendo 
    HEAD~1 = Ultimo commit do HEAD
    HEAD~2 = Penultimo commit do HEAD
    HEAD~3 = Ant-Penultimo commit do HEAD

    Exemplo:
    12334   -   HEAD            COMMIT ATUAL
    3456    -   COMITE 3        (HEAD~1 = Ultimo commit do HEAD)
    12333   -   COMMIT 2        ( HEAD~2 = Penultimo commit do HEAD)
    37765   -   PRIMEIRO COMMIT ( HEAD~3 = Ant-Penultimo commit do HEAD)

    Sabendo disso agora podemos escolher o commit com o seguinte código

        git checkot HEAD~1

## RETORNANDO O COMMIT PARA O HEAD OU PARA O COMMIT PRINCIPAL MAIS ATUALIZADO
git checkout main

## IMPORTANTE - IMPORTANTE
### FUNCIONA TAMBÉM QUANDO OUVER UMA INDECISÃO, SE PERDEU NO CÓDIGO - USA ESSE COMANDO PARA RETORNAR PARA O COMITE ORIGINAL
### APÓS MUDAR O COMMIT E VAI VOLTAR PARA O MAIN , TEMOS QUE FAZER O SEGUINTE
    - IMPORTANTE NÃO MECHER EM NENHUM ARQUIVO APÓS MUDAR O COMMIT
    - E PARA VOLTAR PARA O MAIN E TEM ALGUMA ALTERAÇÃO , IRÁ DAR ERRO!!
    - PARA GARANTIR QUE ISSO NÃO VAI ACONTECER
    - TODA VEZ QUE FORM VOLTAR PARA O MAIN EXECUTE OS COMANDOS

        git status
            - Verificar se houveram mudanças, se houveram , siga!!
        git reset
            - Tira dos os commits que estejam no staged ou adicionados 
        git clean -df
            - Este comando é usado para remover arquivos não rastreados do diretório de trabalho.
        git checkout -- . 
            - Significa desfazer as alterações em todos os arquivos no diretório atual

    - Após isso :
        git status
            - Tem que aparecer a seguinte mensagem
            "nothing to commit, working tree clean"
        
    - Agora sim pode retornar ao MAIN
        git checkout main



# ==============================================================================
### GITIGNORE - IGNORAR ARQUIVOS
Os nomes de arquivos/diretórios ou extensões de arquivos listados no arquivo **.gitignore** não serão adicionados em um repositório. Existem dois arquivos .gitignore, são eles:

* Geral: Normalmente armazenado no diretório do usuário do Sistema Operacional. O arquivo que possui a lista dos arquivos/diretórios a serem ignorados por **todos os repositórios** deverá ser declarado conforme citado acima. O arquivo não precisa ter o nome de **.gitignore**.

* Por repositório: Deve ser armazenado no diretório do repositório e deve conter a lista dos arquivos/diretórios que devem ser ignorados apenas para o repositório específico.

# ===============================================================================

# REPOSITÓRIO REMOTO
### EXIBE OS REPOSITÓRIO
	git remote	

	O comando git remote é usado para exibir informações sobre os repositórios remotos configurados em seu repositório Git local. Aqui estão duas formas comuns de usá-lo:

	git remote -v

	Este comando lista os nomes dos repositórios remotos configurados juntamente com as URLs (endereços) correspondentes. Além de mostrar os nomes dos remotos, ele exibe as URLs que o Git utiliza para se conectar a esses remotos. Isso é útil para verificar as URLs dos remotos para fins de clonagem, push e pull.
### Vincular repositório local com um repositório remoto
	git remote add origin <ssh>
### Criar um Alias (Pseudonimo)

	git remote add <nome-alias> <ssh>	
### Exibir informações dos repositórios remotos

	git remote show origin
	
### Renomear um repositório remoto 
	git remote rename origin curso-git
	
### Desvincular um repositório remoto	
	git remote remove origin
### Enviar arquivos/diretórios para o repositório remoto

O primeiro **push** de um repositório deve conter o nome do repositório remoto e o branch.

	git push -u origin master
	
Os demais **pushes** não precisam dessa informação

	git push
### Atualizar repositório local de acordo com o repositório remoto
##### Atualizar os arquivos no branch atual

	git pull origin main

	git pull 
	
##### Buscar as alterações, mas não aplica-las no branch atual

	git fetch
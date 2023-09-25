# GIT

## Estados

* Modificado (modified);
* Preparado (staged/index)
* Consolidado (comitted);

## Ajuda
##### Geral
	git help
	
##### Comando específico
	git help add
	git help commit
	git help <qualquer_comando_git>	
##### Lista Dos Comandos
git help -a
git help -g

## Configuração

### Geral

As configurações do GIT são armazenadas no arquivo **.gitconfig** localizado dentro do diretório do usuário do Sistema Operacional. As configurações realizadas através dos comandos abaixo serão incluídas no arquivo citado acima.
	
# CHAVE PUBLICA
## Verificando se Existe
	- Navegue até o diretório digitando no prompt
		cd ~/.ssh		
	- Não precisa está na Pasta
		Get-ChildItem ~/.ssh	
## Listar todas as chaves
		
	- Não precisa está na Pasta
		Get-ChildItem $HOME\.ssh

## Exclui todas as Chaves
		
	- Navegue até o diretório digitando no prompot
		Remove-Item $HOME\.ssh\*.pub
		
## Exclui um Item 
	- Primeiro liste os itens  veja o nome e exclua
		Remove-Item $HOME\.ssh\nome-item
	
### Gerar uma Chave Publica
	- Isso irá gerar uma nova chave SSH RSA com o tamanho de bits 4096. Substitua "seu_email@example.com" pelo seu endereço de e-mail associado à sua conta.

USAR UM OU OUTRO: - dependendo do sistema operacional caso de erro tente o outro !!

	1 - 	ssh-keygen -t ed25519 -C "your_email@example.com"
	2 - 	ssh-keygen -t rsa -b 4096 -C "your_email@example.com"


	- Após executar o comando será solicitado que informe uma senha e confirme , caso não queira é so aperter ENTER
	
### Copiar Chave
	Get-Content $HOME\.ssh\id_ed25519.pub | Set-Clipboard

	ou

	Abra a pasta .ssh
		- Normalmente a .ssh fica localizada em :
			C:\Users\nome_usuario_no_sistema\.ssh
		Abra ao arquivo Public no bloco de notas e copie a chave !!

### SSH GITHUB
	- Abra seu github
	- Clique onde está sua foto -  canto superior direito
	- Settings
	- SSH ande GPG keys
	- New SSH key
	- De um nome em Title
	- Cole a cheve em kay
	
	
##### Alterar o  valor 
	Para alterar o valor já setado, tanto para name quanto para email é so incluir um outro valor usando o mesmo comando:

	git config --global user.name "<novo-nome-usuario>"
	git config --global user.email <novo-valor>
	
##### Excluir
	Para excluir a configuração global de e-mail ou name do Git, você pode usar o seguinte comando
	git config --global --unset user.name
	git config --global --unset user.email
	
#####	Pra verificar se foi excluido 
	git config --global user.name
	git config --global user.email
	obs: Se não retornar nada é porque foi removido !!
	obs: Pode ser verificado também na lista de configurações abaixo

##### Listar configurações
	Lista todas as configurações ( importante )
	git config --list

### Ignorar Arquivos
Os nomes de arquivos/diretórios ou extensões de arquivos listados no arquivo **.gitignore** não serão adicionados em um repositório. Existem dois arquivos .gitignore, são eles:

* Geral: Normalmente armazenado no diretório do usuário do Sistema Operacional. O arquivo que possui a lista dos arquivos/diretórios a serem ignorados por **todos os repositórios** deverá ser declarado conforme citado acima. O arquivo não precisa ter o nome de **.gitignore**.

* Por repositório: Deve ser armazenado no diretório do repositório e deve conter a lista dos arquivos/diretórios que devem ser ignorados apenas para o repositório específico.

## Repositório Local

### Criar novo repositório
	git init
### Verificar estado dos arquivos/diretórios
	git status

### Adicionar Arquivo/Diretório 
##### Adicionar um arquivo em específico
	Após realizar a comando git status será mostrado todas as mudanças e nome dos arquivos afetados
	escolha de forma individual qual arquivo vai ser adicionado.

	git add meu_arquivo.txt
##### Adicionar um diretório em específico
	git add meu_diretorio
##### Adicionar todos os arquivos/diretórios	
	git add .	

	Com esse comando todos os arqivos modificados serão adicionados	
##### Adicionar um arquivo que esta listado no .gitignore (geral ou do repositório)	.
	Caso queira adicionar um arquivo que esteja listado no .gitignor use o comando abaixo

	git add -f arquivo_no_gitignore.txt
	
### Comitar Arquivo/Diretório
##### Comitar um arquivo	
	git commit meu_arquivo.txt
##### Comitar vários arquivos
	git commit meu_arquivo.txt meu_outro_arquivo.txt	
##### Comitar informando mensagem
	git commit meuarquivo.txt -m "minha mensagem de commit"
#### Comitando todos os arquivos adicioandos ateriormente
	Após ter adicionados os arquivos com o comando add . 

	git commit -m "INFORMAR A MENSAGEM AQUI ENTRE ASPAS"
### Visualizar histórico dos Cmmits Feitos
##### Exibir histórico
	Exibe todo o histórico dos commites realizados

	git log	
##### Exibir histórico com diff das duas últimas alterações
	git log -p -2	

O comando git log -p -2 é usado para exibir informações detalhadas sobre os últimos dois commits no repositório Git, incluindo as diferenças (ou "diffs") entre esses commits e suas versões anteriores. Vou explicar cada parte do comando:

git log: Isso inicia o comando para exibir o histórico de commits do repositório.

-p ou --patch: Esta opção diz ao Git para incluir as informações de "diff" ou diferenças entre as versões dos arquivos no commit. Isso significa que você verá as linhas que foram adicionadas e removidas em cada arquivo em cada commit listado.

-2: Essa parte limita o número de commits a serem exibidos para os últimos dois commits. Você pode ajustar o número (neste caso, 2) para ver mais ou menos commits, dependendo do que você precisa.

##### Exibir resumo do histórico (hash completa, autor, data, comentário e qtde de alterações (+/-))
	git log --stat	

	O comando git log --stat é usado para exibir o histórico de commits do repositório Git, juntamente com estatísticas resumidas de alterações (mudanças) em cada commit. Aqui está a explicação de como funciona esse comando:
##### Exibir informações resumidas em uma linha (hash completa e comentário)
	git log --pretty=oneline

	O comando git log --pretty=oneline é usado para exibir o histórico de commits de um repositório Git de forma simplificada e concisa, apresentando cada commit em uma única linha. Aqui está a explicação de cada parte do comando

	git log --oneline

	Este comando também exibe o histórico de commits no formato "oneline", mas a diferença está na formatação. A saída é semelhante à opção --pretty=oneline, mas não inclui informações adicionais, como a indicação da branch atual

##### Exibir histórico com formatação específica (hash abreviada, autor, data e comentário)

	git log --pretty=format:"%h - %an, %ar : %s"
	
* %h: Abreviação do hash;
* %an: Nome do autor;
* %ar: Data;
* %s: Comentário.

Verifique as demais opções de formatação no [Git Book](http://git-scm.com/book/en/Git-Basics-Viewing-the-Commit-History)

##### Exibir histório de um arquivo específico
	git log -- <caminho_do_arquivo>
##### Exibir histórico de um arquivo específico que contêm uma determinada palavra
	git log --summary -S<palavra> [<caminho_do_arquivo>]
##### Exibir histórico modificação de um arquivo
	git log --diff-filter=M -- <caminho_do_arquivo>
* O <M> pode ser substituido por: Adicionado (A), Copiado (C), Apagado (D), Modificado (M), Renomeado (R), entre outros.
##### Exibir histório de um determinado autor
	git log --author=usuario
##### Exibir revisão e autor da última modificação de uma bloco de linhas
	git blame -L 12,22 meu_arquivo.txt 

### Voltar / Apagar Commit
##### Checkout - Recomendado ( Mantem o histórico)
	git checkout <hash-commit>
##### Revert - Atenção ( Mantem o histórico - Porem reverte o estado Atual)
	git Revert <hash-commit>
##### Reset - Perigoso ( Apaga todo o Hitórico)
	git reset <hash-commit>
##### Tira o arquivo do Commit e volta para o staged/index
	git rm --cached <nome-arquivo>
### Remover arquivo/diretório	
##### Remover arquivo
	git rm meu_arquivo.txt
##### Remover diretório
	git rm -r diretorio
### Desfazendo operações
##### Desfazendo alteração local (working directory)
Este comando deve ser utilizando enquanto o arquivo não foi adicionado na **staged area**. 
	git checkout -- meu_arquivo.txt
##### Desfazendo alteração local (staging area)
Este comando deve ser utilizando quando o arquivo já foi adicionado na **staged area**.
	- Irá tirar todas os arquivos que foram adicionadas no staged e retornar para o status que eles estavam
	git reset 

	git reset HEAD meu_arquivo.txt

Se o resultado abaixo for exibido, o comando reset *não* alterou o diretório de trabalho. 

	Unstaged changes after reset:
	M	meu_arquivo.txt

A alteração do diretório pode ser realizada através do comando abaixo:
	
	git checkout meu_arquivo.txt
## Repositório Remoto
### Exibir os repositórios remotos
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
	
### Clonar um repositório remoto já existente

	git clone <ssh>
	
### Tags

##### Criando uma tag leve

	git tag vs-1.1

##### Criando uma tag anotada

	git tag -a vs-1.1 -m "Minha versão 1.1"

##### Criando uma tag assinada
Para criar uma tag assinada é necessário uma chave privada (GNU Privacy Guard - GPG).

	git tag -s vs-1.1 -m "Minha tag assinada 1.1"

##### Criando tag a partir de um commit (hash)

	git tag -a vs-1.2 9fceb02
	
##### Criando tags no repositório remoto

	git push origin vs-1.2
	
##### Criando todas as tags locais no repositório remoto

	git push origin --tags
	
### Branches

O **main** é o branch principal do GIT.

O **HEAD** é um ponteiro *especial* que indica qual é o branch atual. Por padrão, o **HEAD** aponta para o branch principal, o **main**.

##### Criando um novo branch

	git branch "nome_branch"
	
##### Trocando para um branch existente

	git checkout "nome_branch"
	
Neste caso, o ponteiro principal **HEAD** esta apontando para o branch chamado "nome_branch".

##### Criar um novo branch e trocar 

	git checkout -b "nome_branch"
	
##### Voltar para o branch principal (main)

	git checkout main
	
##### Resolver merge entre os branches

O comando merge no Git é usado para combinar as alterações de uma branch em outra. Basicamente, ele permite que você integre as alterações feitas em uma branch (geralmente uma branch secundária) na branch principal do seu projeto. Isso é comumente usado para mesclar o trabalho de desenvolvedores em uma única linha de desenvolvimento, como a branch main ou master.

	git merge bug-123
	
Para realizar o *merge*, é necessário estar no branch que deverá receber as alterações. O *merge* pode automático ou manual. O merge automático será feito em arquivos textos que não sofreram alterações nas mesmas linhas, já o merge manual será feito em arquivos textos que sofreram alterações nas mesmas linhas.

A mensagem indicando um *merge* manual será:

	Automerging meu_arquivo.txt
	CONFLICT (content): Merge conflict in meu_arquivo.txt
	Automatic merge failed; fix conflicts and then commit the result.


##### Apagando um branch

	git branch -d bug-123

##### Listar branches 

###### Listar branches

	git branch

###### Listar branches com informações dos últimos commits

	git branch -v

###### Listar branches que já foram fundidos (merged) com o **main**

	git branch --merged

###### Listar branches que não foram fundidos (merged) com o **main**

	git branch --no-merged

##### Criando branches no repositório remoto

###### Criando um branch remoto com o mesmo nome

	git push origin "nome_Branch"

###### Criando um branch remoto com nome diferente

	git push origin nome_branch:new-branch

##### Baixar um branch remoto para edição

	git checkout -b nome_brabch origin/nome_branch


##### Apagar branch remoto

	git push origin:nome_branch

### Rebasing

Fazendo o **rebase** entre um o branch bug-123 e o master.

	git checkout experiment
	
	git rebase master
	

Mais informações e explicações sobre o [Rebasing](http://git-scm.com/book/en/Git-Branching-Rebasing)

###Stash

Para alternar entre um branch e outro é necessário fazer o commit das alterações atuais para depois trocar para um outro branch. Se existir a necessidade de realizar a troca sem fazer o commit é possível criar um **stash**. O Stash como se fosse um branch temporário que contem apenas as alterações ainda não commitadas.

##### Criar um stash
	
	git stash
	
##### Listar stashes

	git stash list

##### Voltar para o último stash

	git stash apply

##### Voltar para um stash específico
	
	git stash apply stash@{2}
	
Onde **2** é o indíce do stash desejado.

##### Criar um branch a partir de um stash

	git stash branch meu_branch

### Reescrevendo o histórico

##### Alterando mensagens de commit

	git commit --amend -m "Minha nova mensagem"

##### Alterar últimos commits
Alterando os três últimos commits

	git rebase -i HEAD~3

O editor de texto será aberto com as linhas representando os três últimos commits.

	pick f7f3f6d changed my name a bit
	pick 310154e updated README formatting and added blame
	pick a5f4a0d added catfile

Altere para edit os commits que deseja realizar alterações.

	edit f7f3f6d changed my name a bit
	pick 310154e updated README formatting and added blame
	pick a5f4a0d added catfile

Feche o editor de texto.

Digite o comando para alterar a mensagem do commit que foi marcado como *edit*.

	git commit –amend -m “Nova mensagem”

Aplique a alteração

	git rebase --continue

**Atenção:** É possível alterar a ordem dos commits ou remover um commit apenas
mudando as linhas ou removendo.


##### Juntando vários commits
Seguir os mesmos passos acima, porém marcar os commtis que devem ser juntados com **squash*
	
##### Remover todo histórico de um arquivo

	git filter-branch --tree-filter 'rm -f passwords.txt' HEAD
	
	
### Bisect
O bisect (pesquisa binária) é útil para encontrar um commit que esta gerando um bug ou uma inconsistência entre uma sequência de commits.

##### Iniciar pequinsa binária

	git bisect start
	
##### Marcar o commit atual como ruim

	git bisect bad

##### Marcar o commit de uma tag que esta sem o bug/inconsistência

	git bisect good vs-1.1

##### Marcar o commit como bom
O GIT irá navegar entre os commits para ajudar a indentificar o commit que esta com o problema. Se o commit atual não estiver quebrado, então é necessário marca-lo como **bom**.

	git bisect good

##### Marcar o commit como ruim
Se o commit estiver com o problema, então ele deverá ser marcado como **ruim**.

 	git bisect bad
 
##### Finalizar a pesquisa binária
Depois de encontrar o commit com problema, para retornar para o *HEAD* utilize:
	
	git bisect reset

#### Aualizar um Repositório Local - Eliminando conflito 
		- Atualiza as alterações feitas no Github , nas quais o seu repositório local não tem

			git pull origin main
 	

# Contribuições

Sinta-se a vontade para realizar adicionar mais informações ou realizar correções. Fork me!


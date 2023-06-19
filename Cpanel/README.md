# REPOSITÓRIO CPANEL
# CRIAR UMA CHAVE SSH
	1 - Acessar a conta CPANEL 
	2 - Acesse gitVersion
	3 - Aperte em Criar
	4 - SSH Access
	5 - Manege SSH keys
	
## Key-Name
	Pode colocar qualquer um , por padão id_rsa_cpanel
## Key Passwwork
	Crie uma senha
## reenter Passwork
	Confirme  senha
---- Regar Chave -------

# DOWNLOADS CHAVS
	BAIXE AS CHAVES ( PUBLICA E PRIVADA )	
## LOCALIZA A PASTA .SSH NO PROMPT
	Get-ChildItem ~/.ssh 
	OBS: a PASTA ESTÁ LOCALIZADA EM:
	C:\Users\USUARIO-PC\.ssh
	
# COLAR AS CHAVES NA PASTA
	- Copie e as chaves na pasta  .SSH
	
## Mover os Arquivos para a pasta .ssh
	mv Caminho-onde-está-as-chaves\id_rsa_cpanel ~/.ssh/
	ex:  mv D:\ARQUIVOS-JOTA-CPANEL\id_rsa_cpanel ~/.ssh/
obs: Cole as duas chaves

## Adicione a chave SSH ao agente SSH
	ssh-add ~/.ssh/id_rsa_cpanel

## Adicionar o repositório remoto "origin" usando a URL fornecida,
	git remote add origin ssh://....
 
## Remover o repositorio remoto
	git push origin master

# CRIANDO UM REPOSITÓRIO LOCAL E ENVIANDO PARA O CPANEL
## Comandos PowerShell
### Navegue até o diretorio em seu computador que será usada para criar a pasta
	cd caminho-da-pasta

### Criar a Pasta
	mkdir nome-pasta

### Criar um Arquivo README.md
#### Nevegue até a pasta criada
	cd nome-pasta

#### Criar o Arquivo
	echo > README.md

## Criar repositório o Arquivo
	git init
	
### Status
	git status

### Adicionar
	git add.  ( para todos)
	git add nome-arquivo

### Comitar
	git commit -m "mensagem"
	
## Informar a chave que será usada
### Localizar as Chaves
	Get-ChildItem ~/.ssh
	
### Informar a chave a ser usada
	$env:GIT_SSH_COMMAND = "ssh -i ~/.ssh/nome-chave"

### Enviar - Push
	git push origin master -u --exec=/usr/local/cpanel/3rdparty/bin/git-receive-pack 
	
### Deletar chave da Pasta
	Remove-Item ~/.ssh/nome_chave
	
# CLONAR DO GITHUB PARA O CPANEL
### 1 - Clonar repositório do GitHub
	1 - A cesse seu gitHub , neveque até o diretorio que vai ser clonado , aperte CODE e copie o HTTPS
	exemplo : https://github.com/Usuario-git/repositorio.git

### 2 - Acesse Conta Cpanel 
	1 - Acessar a conta CPANEL 
	2 - Acesse gitVersion
	3 - Aperte em Criar

#### -	Clone URL	
	1 - Cole o HTTPS do Github	
	

####  - Repositório Path
	Informe a pasta onde vai ser clonada
	/home1/jotaejki/nome-pasta
	/home1/jotaejki/public_html/nome-pasta

###  - Repository Name
	1 - De um nome para o repositório
	
###5 - Aperte Criar
	1 - Será Criado um clone do diretório do github na pasta informada 

# CLONAR DO CPANEL PARA O COMPUTADOR
	1 - Acessar a conta CPANEL 
	2 - Acesse gitVersion
	3 - Se o repositório ja foi criado aperte em gerenciar 
	4 - Copie a chave CLONE URL
### Acesse o seu Powshell 
	 git clone --recursive chave-ssh
 	 git clone chave-ssh
	 
---- Será criado um clone do diretório cpanel -------

### Senha de Conexao
	A senha é a senha do painel CPANEL

### CONEXAO COM SERVIDOR CPANEL
	ssh usuario-cpanel@IP-do-servidor

## O caminho padão do servidor 
	1- Ao se conectar a pasta rais é o segunte caminho ( /home1/nome-usuario-cpanel )
		obs: esse caminho pode mudar de servidor para servidor

	2 - Esse caminho não precisa ser informado

## Listando as pastas de dentro do diretóio
	ls

	1- se esse comando for executado após a conexao , será listado o diretório rais , todas as pastas

## Mudando de pasta
	

## Após isso use CD para navegar entre as pastas		
		
		cd /public_html/        		- pasta raiz public

		cd /public_html/nome-da-pasta    	- escolhendo uma pasta no diretório
	
# PERMISSÕES

## Lista as Permisões os arquivos no diretório
	ls -l

### Explicação	
	
	d: Indica que é um diretório.
	r: Permissão de leitura.
	w: Permissão de gravação.
	x: Permissão de execução.

 
#### Permissão de leitura (r):

##### -rwxr-xr-x
		Significado: O arquivo ou diretório pode ser lido, mas não pode ser modificado ou executado pelo proprietário, grupo ou outros usuários.
		
#### Permissão de gravação (w):

##### drw-rw-r--
		Significado: O diretório pode ser modificado pelo proprietário e grupo, mas não pelos outros usuários. Os arquivos dentro do diretório também podem ser 				modificados pelo proprietário e grupo.
	
#### Permissão de execução (x):

##### -rw-r--r--
		Significado: O arquivo pode ser executado por ninguém, incluindo o proprietário, grupo e outros usuários. Isso é comum para arquivos de dados ou configuração.
		
#### Permissões completas (rwx):

##### drwxrwxrwx
		Significado: O diretório pode ser lido, modificado e executado por qualquer usuário, incluindo o proprietário, grupo e outros usuários. Isso é comum para 		diretórios públicos ou compartilhados.
	

	
			
	




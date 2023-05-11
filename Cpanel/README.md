# REPOSITÓRIO CPANEL

# CRIAR UMA CHAVE SSH
	1 - Acessar a conta CPANEL 
	2 - Acesse gitVersion
	3 - Aperte em Criar
	4 - SSH Access
	5 - Manege SSH keys
	
## Key-Name
	Pode colocar qualquer um , por padão id_rsa
## Key Passwwork
	Crie uma senha
## reenter Passwork
	Confirme  senha

---- Regar Chave -------
	

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

## Commitar o Arquivo

### Status
	git status

### Adicionar
	git add.  ( para todos)
	git add nome-arquivo

### Comitar
	git commit -m "mensagem"

### Enviar - Push
	git push origin master -u --exec=/usr/local/cpanel/3rdparty/bin/git-receive-pack 
	
	
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

## CLONAR DO CPANEL PARA O COMPUTADOR
	1 - Acessar a conta CPANEL 
	2 - Acesse gitVersion
	3 - Se o repositório ja foi criado aperte em gerenciar 
	4 - Copie a chave CLONE URL
### Acesse o seu Powshell 
	1 - navegue até a pasta qque será guardado o clone
	2 - Digite um dos comandos:
	 git clone --recursive chave-ssh
 	 git clone chave-ssh

---- Será criado um clone do diretório cpanel -------

# TESTAR A CONEXÃO
	 git ls-remote -h -t <chave-ssh>

# CONEXAO COM SERVIDOR CPANEL
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
	

	
			
	



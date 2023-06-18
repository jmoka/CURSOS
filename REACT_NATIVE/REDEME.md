# Instalar Dependencia
## Abrir como Administrador PowerShell
	obs: O usuário do driver C: não pode ter virgula, ponto , espaços etc..
	ex: c:/user/jota/
### 1. Limpar o cache do npm: Execute o comando para limpar o cache do npm. Em seguida, tente criar o projeto React Native novamente.
    npm cache clean --force
### 2. Reinstalar o React Native CLI: Desinstale o React Native CLI executando o comando:
    npm uninstall -g react-native-cli
### 3. Reinstale-o com o comando. Certifique-se de executar os comandos como administrador ou usando sudo (no macOS/Linux).
    npm install -g react-native-cli
## Utilizar o yarn: 
### Se você estiver usando npm, tente utilizar o gerenciador de pacotes yarn em vez disso. 
#### Primeiro, desinstale o React Native CLI:
    npm uninstall -g react-native-cli
####  Instale o yarn globalmente com
    npm install -g yarn
#### Crie um novo projeto React Native usando o comando.
    npx react-native init Nome_do_App --template react-native-template-typescript
# Comandos
## Verificar a permissão
	Get-ExecutionPolicy 
## O retorno deve ser AllSigned, caso contrário faça o seguinte:
### Se o retorno for "Restricted" execute o comando
	Set-ExecutionPolicy AllSigned
	- Escolha a opção "a" - Sim para todos
## Instala o Chocolatey no seu PC
	Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

### Verifique se o Chocolatey foi instalado digite no PowerShell
	
	choco

	- Retorno Esperado : 
		Chocolatey v2.0.0
		Please run 'choco -?' or 'choco <command> -?' for help menu.

### Instalar as dependencias Globais ( observe a versão do jdk nesse caso 11)
	choco install -y node.js-lts open.jdk.11
### verificar as dependencias
	node -v
	npm -v
	java -version
#### Instalar o yarn de forma Global
	npm install --global yarn
	
##### Verificar se foi instalado corretamente
	yarn -v
###### Caso não Instale digite o comando
	choco install yarn
	
	escolha "a" sim para todo

### Verificar o caminho do bin yarn
	yarn global bin
	
	obs: copie o caminho que retornou
	C:\Users\jotac\AppData\Local\Yarn\bin


### Variáveis de Ambiente
#### Local para o SDK
Instalação do Android Studio
Vamos preparar a instalação do Android Studio criando o local para o SDK. Recomendo usar o caminho C:\Android\Sdk como local de instalação da SDK.

Não utilize caracteres especiais, espaço ou acentuação para definir o caminho para a SDK do Android Studio.

Depois de definir o local para a SDK, clique com o botão direito do mouse no menu iniciar, abra a opção Sistema e clique em Configurações avançadas do sistema na lista de opções no lado direito da tela. Na tela seguinte, clique no botão Variáveis de ambiente.

Clique no botão Nova... da parte inferior, ou seja, para criar uma variável de ambiente para ficar disponível em todo o sistema, independente do usuário logado.

#### ANDROID_HOME
Preencha o formulário informando o Nome da Variável como ANDROID_HOME. O Valor da variável é C:\Android\Sdk, que é exatamente o caminho que definimos para a SDK. Clique em OK para confirmar.

#### JAVA_HOME
Normalmente a instalação do OpenJDK através do Chocolatey já cria a variável JAVA_HOME automaticamente. Verifique se ela já existe aí no seu PC, caso não exista, precisará executar o mesmo processo de criação de variável, porém pegando o local de instalação do Java que normalmente fica no local: Procure em

C:\Program Files\Java\jdk-20

### Na mesma janela de variáveis de ambiente precisamos incluir quatro configurações na variável Path já existente. Selecione a variável Path na lista inferior e clique no botão Editar.... Na tela de edição, clique no botão Novo para informar a configuração abaixo, porém uma por linha:

%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\platform-tools

# Inslate o Android Studio, abra ee vá em:
    More Actions
## Sdk manager
### Sdk Platform 
    Android API 34
    Android 10 ou superior
### SDK Tool
    Android SDK Build-Tools 34
    Android SDK Comandand-line Tolls (latest)
    Android Emulator
    Android SDK Platform-Tools


# Incializando o Sistema
## Abra o PowerShell no diretório do sistema e rode o seguinte comando
    npm start
## Abra Outro PowerShell no mesmo diretório e execute o comando
    npm run android
### Caso apresente Erro , Execute o  Comando
    npx react-native run-android
# .editorconfig
## se na raiz do projeto não estiver o .editorconfig crie a pasta e cole o codigo
	root = true
	[*]
	indent-size = 2
	indent_style = space
	charset = htf8
	trim_trailing_whitespace = true
	insert_final_newline = true
	end_of_line = lf
## Instalação dos Pacotes
	yarn add -d eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier
## Crie o arquivo .eslintignore na raiz do arquivo abra e cole o codigo
    **/*.js
    node_modules
    build
    android
    ios
    .expo

# Instaalando as instanções no VS.Code
ESLint v2.4.0
Prettier - Code formatter
EditorConfig for VS Code

# Instalar prettier
	yarn add -D prettier

# Configurações
## .buckconfig

[android]
  target = Google Inc.:Google APIs:23

[maven_repositories]
  central = https://repo1.maven.org/maven2

## .editorconfig
root = true

[*]
indent_size = 2
indent_style = space
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf

## .eslintingore
**/*.js
node_modules
build
android
ios
.expo

## .eslintrc
module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};

## .gitattributes

	
	# Windows files should use crlf line endings
	# https://help.github.com/articles/dealing-with-line-endings/
	*.bat text eol=crlf
	

## .gitignore
	# OSX
	#
	.DS_Store

	# Xcode
	#
	build/
	*.pbxuser
	!default.pbxuser
	*.mode1v3
	!default.mode1v3
	*.mode2v3
	!default.mode2v3
	*.perspectivev3
	!default.perspectivev3
	xcuserdata
	*.xccheckout
	*.moved-aside
	DerivedData
	*.hmap
	*.ipa
	*.xcuserstate

	# Android/IntelliJ
	#
	build/
	.idea
	.gradle
	local.properties
	*.iml
	*.hprof

	# node.js
	#
	node_modules/
	npm-debug.log
	yarn-error.log

	# BUCK
	buck-out/
	\.buckd/
	*.keystore
	!debug.keystore

	# fastlane
	#
	# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the
	# screenshots whenever they are needed.
	# For more information about the recommended setup visit:
	# https://docs.fastlane.tools/best-practices/source-control/

	*/fastlane/report.xml
	*/fastlane/Preview.html
	*/fastlane/screenshots

	# Bundle artifact
	*.jsbundle

	# CocoaPods
	/ios/Pods/
## .prettierrc
  module.exports = {
  semi: true,
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWitdh: 80,
};



## Usando e Rodando o Pojeto
### 2 PowerShell e rose os seguintes comando um em cada
	yarn start
	yarn android
## Ou em um so comando
	npx react-native run-android




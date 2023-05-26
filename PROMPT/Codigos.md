# Renomear Todas as Pastas de um Arquivos e Trocar os Espaços em Branco Por:
## Acessar a Pata
  cd Caminho-da-Pasta
## Código para Renomear
  Get-ChildItem -Directory | Rename-Item -NewName { $_.Name -replace " ", "-" }
# Adicionar um valor ao final do nome dos arquivos
Get-ChildItem | Rename-Item -NewName { $_.Name + "_agil" }
# Adicionada entre o nome do arquivo
Get-ChildItem | Rename-Item -NewName { $_.Name -replace '(.+)(\..+)', '$1NOME-OU-ITEM-PARA-ADICIONAR$2' }
# Refazendo o Comando
Get-ChildItem | Rename-Item -NewName { $_.Name -replace '(.+)NOME-OU-ITEM-PARA-ADICIONAR(..+)', '$1$2' }
#OBS
Get-ChildItem | Rename-Item -NewName { $_.Name -replace '(.+)AQUI-VC-COLOCA-O-QQUE-QUER-ENCONTRAR (..+)', '$1 AQUI-COLOCA-O-QUE-SERA-INCLUIDO $2' }

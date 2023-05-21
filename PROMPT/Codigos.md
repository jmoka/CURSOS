# Renomear Todas as Pastas de um Arquivos e Trocar os Espaços em Branco Por:
## Acessar a Pata
  cd Caminho-da-Pasta
## Código para Renomear
  Get-ChildItem -Directory | Rename-Item -NewName { $_.Name -replace " ", "-" }
# Adicionar um valor ao final do nome dos arquivos
Get-ChildItem | Rename-Item -NewName { $_.Name -replace '(.+)(\..+)', '$1NOME-OU-ITEM-PARA-ADICIONAR$2' }

# Renomear Todas as Pastas de um Arquivos e Trocar os Espaços em Branco Por:
## Acessar a Pata
  cd Caminho-da-Pasta
  
## Código para encontar uma letra um simbolo dentro do NOME DE PASTAS DENTRO DE OUTRAS PASTAS. Encpontra e troca por outra cois
### Ao Final do código entre as duas "  " , "  " vc coloca o quer encontrar e na outra o que quer trocar
#### No Caso do codigo abaixo encontra o espaço vazil e troca pi _
            Get-ChildItem -Directory | Rename-Item -NewName { $_.Name -replace " ", "-" }
            
## Código para encontar uma letra um simbolo dentro do nome de UM ARQUIVOS DENTRO DE UMA PASTA e troca por outra coisa
### Ao Final do código entre as duas " " , "  " vc coloca o quer encontrar e na outra o que quer trocar
#### No Caso do codigo abaixo encontra o espaço vazil e troca pi _
             Get-ChildItem -File | ForEach-Object { 
             $newName = $_.Name -replace " ", "_" 
             $_ | Rename-Item -NewName $newName
             }

# Adicionar um valor ao final do nome das Pastas
### Adicionar o quer adiconar entre as " "
Get-ChildItem | Rename-Item -NewName { $_.Name + " " }

# Troca o Nome da pata e Todo o Conteudo
## Substituie os espaços em Branco e troca por -
  Get-ChildItem -Recurse | Rename-Item -NewName { $_.FullName -replace " ", "-" }



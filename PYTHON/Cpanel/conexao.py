import mysql.connector

# criar conexão com mysql, cpanel
def criar_conectar(host, usuario, senha, banco):
    con = mysql.connector.connect(host=host,
                                  user=usuario,
                                  password=senha,
                                  database=banco)
# fechar conexão
def fechar_conexão(con):
    return con.close()


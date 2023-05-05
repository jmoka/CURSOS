import mysql.connector

#========================
# PRIMEIRA CONEXAO
#========================
def conectar_pc_1():
    con=mysql.connector.connect(host ='localhost',
                                database='jotaempresas',
                                user='root',
                                password='Jota1@79',
                                port='3306')
    print('CONECTADO PC-1')

    return con
# ========================================================

#=========================
# SEGUNDA CONEXAO
#=========================
def conectar_pc_2(host, database, user, password, port):
    con=mysql.connector.connect(
                                host =host,
                                database=database,
                                user=user,
                                password=password,
                                port=port)
    print('CONECTADO PC-2')

    return con
def dados_conexao_pc_2():
    host = 'localhost'
    database = 'jotaempresas'
    user = 'root'
    password = 'Jota1@79'
    port = '3306'

    return conectar_pc_2(host, database, user, password, port)

# ========================================================

if __name__ == '__main__':
    conectar_pc_1()
    dados_conexao_pc_2()

# =========================================================
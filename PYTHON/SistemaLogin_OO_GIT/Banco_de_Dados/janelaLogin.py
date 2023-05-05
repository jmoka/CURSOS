from tkinter import *
from tkinter import messagebox
from Banco_de_Dados import conexao_BD
from Banco_de_Dados import janelaPrincipal



global usuario_digitado, senha_digitada, campoUsuario1, campoSenha1, janela1

#======================================
'''
JANELA 
'''
# =====================================

def sql():
    global usuario_digitado, senha_digitada
    usuario_digitado = campoUsuario.get()
    senha_digitada = campoSenha.get()
    sql = f'''select * from brasil
          where nome='{usuario_digitado}' and senha='{senha_digitada}';'''

    conferir_usuario_v(usuario_digitado, sql)

def conferir_usuario_v(usuario_digitado, sql):
    if usuario_digitado != "":
       conferir_senha_v(senha_digitada, sql)
    else:
       return messagebox.showinfo("Jota Contabilidade", "CAMPO USUÁRIO ESTÁ VAZIO")

         # CONFERIR SENHA

def conferir_senha_v(senha_digitada, sql):
      if senha_digitada != "":

         conectar_buscar(sql)

      else:
         return messagebox.showinfo("Jota Contabilidade", "CAMPO SENHA ESTÁ VAZIO")

    # Buscar informação banco de dados
def conectar_buscar(sql):
      conexao_BD.Metodos.metodo_coleta(sql)
      for variavel in conexao_BD.Metodos.metodo_coleta(sql).comite_resultado:
          conferir_usuario(variavel)
          return
      else:
          messagebox.showinfo("Usuario ou Senha", "USUÁRIO OU SENHA ERRADA, TENTE NOVAMENTE")
      return

def conferir_usuario(variavel):
      if variavel == None:
         messagebox.showinfo("Jota Contabilidade", "USUÁRIO OU SENHA ERRADA, TENTE NOVAMENTE!!")

      else:
         print("Acesso Liberado")
         janela1.destroy()
         janelaPrincipal.abrir_janela()


janela1=Tk()

janela1.title("Login")
    # POSICIONAMENTO DA JANELA
    # LARGULA
largura1 = janela1.winfo_screenmmwidth()
    # REDIMENCIONAMENTO DA TELA
janela1.resizable(False, False)

# ALTURA
altura1 = janela1.winfo_screenmmwidth()

# POSICIONAMENTO
largura = 300
altura = 150
posicao_x = largura1 = 800 - largura1 / 2
posicao_y = altura1 = 500 - altura1 / 2

# USAR O GEOMETRIA , COMANDO GEOMETRY
janela1.geometry(f"%dx%d+%d+%d" % (largura, altura, posicao_x, posicao_y))
# ETRRY OU TEXT BOX 2

campoUsuario = Entry(janela1,
                font="Arial 12 bold italic",
                     width=20,
                     bd=5,
                     relief='groove',
                     justify=LEFT)



campoSenha = Entry(janela1,
                   font="Arial 12 bold italic",
                   width=20,
                   bd=5,
                   relief='groove',
                   justify=LEFT)



# CRIAR OS CAMPOS ( LABEL, TEXT, BUTTON)
labelUsuario = Label(janela1,
                     text="USUARIO",
                     font="bold",
                     anchor=S,
                     justify=CENTER)

labelSenha = Label(janela1,
                   text="SENHA",
                   font="bold",
                   anchor=S,
                   justify=CENTER)

labelInfo = Label(janela1,
                  text="USUÁRIO: admin , SENHA: admin",
                  anchor=S,
                  justify=CENTER,
                  fg="Red")

labelJotaEmpresa = Label(janela1,
                         text="JOTA EMPRESAS",
                         anchor=S,
                         justify=CENTER,
                         font="courier 10 bold",
                         fg="Blue")
#========================================
# =========================================
# instanciar valor digitado
# INSTANCIAR AUTENTICAR
#=======================================

# CRIAR 2 BUTTON
botaoEntar = Button(janela1,
                    text="ENTRAR",
                    anchor=S,
                    justify=CENTER,
                    fg="Blue",
                    command=sql
                    )

botaoSair = Button(janela1,
                   text="SAIR",
                   anchor=S,
                   justify=CENTER,
                   fg="Blue")

# GRID, REALIZA O POSICIONAMENTO
campoUsuario.focus()
labelUsuario.grid(row=3, column=1, sticky=W)
labelSenha.grid(row=4, column=1, sticky=W)
botaoEntar.grid(row=5, column=2, sticky='we')
botaoSair.grid(row=6, column=2, sticky='we')
campoUsuario.grid(row=3, column=2, sticky='we')
campoSenha.grid(row=4, column=2, sticky='we')
labelInfo.grid(row=7, column=2, sticky=W)
labelJotaEmpresa.grid(row=1, column=2, sticky="we")

mainloop()
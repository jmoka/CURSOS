'''IMPORTAR AS BIBLIOTECAS'''
from tkinter import *
from tkinter import messagebox
from Banco_de_Dados import conexao_BD

<<<<<<< HEAD
x=conexao_BD.conectar.tabela
print(x)
print('tudo ok')
=======

class Janela_Clientes:
    '''CLASSE JANELA DE LOGIN E SENHA'''
    '''MÉTODO CONSTRUTOR'''
    def __init__(self):
       self.janela = Tk()
       self.janela.title("Login")
# POSICIONAMENTO DA JANELA
       self.largura1 = self.janela.winfo_screenmmwidth()
# REDIMENCIONAMENTO DA TELA
       self.janela.resizable(False, False)
# ALTURA
       self.altura1 = self.janela.winfo_screenmmwidth()
# POSICIONAMENTO
       self.largura = 300
       self.altura = 230
       self.posicao_x = self.largura1 = 800 - self.largura1 / 2
       self.posicao_y = self.altura1 = 500 - self.altura1 / 2
# USAR O GEOMETRIA , COMANDO GEOMETRY
       self.janela.geometry(f"%dx%d+%d+%d" % (self.largura, self.altura, self.posicao_x, self.posicao_y))
# ENTRY
       self.campoUsuario = Entry(self.janela,
                     font="Arial 12 bold italic",
                     width=20,
                     bd=5,
                     relief='groove',
                     justify=LEFT)

       self.campoSenha = Entry(self.janela,
                   font="Arial 12 bold italic",
                   width=20,
                   bd=5,
                   relief='groove',
                   justify=LEFT)

       self.campoemail = Entry(self.janela,
                                 font="Arial 12 bold italic",
                                 width=20,
                                 bd=5,
                                 relief='groove',
                                 justify=LEFT)
       self.campocpf = Entry(self.janela,
                               font="Arial 12 bold italic",
                               width=20,
                               bd=5,
                               relief='groove',
                               justify=LEFT)

# CRIAR OS CAMPOS ( LABEL )
       self.labelUsuario = Label(self.janela,
                     text="Usuário",
                     font="bold",
                     anchor=S,
                     justify=CENTER)

       self.labelSenha = Label(self.janela,
                   text="Senha",
                   font="bold",
                   anchor=S,
                   justify=CENTER)

       self.labelEmeil = Label(self.janela,
                               text="Email",
                               font="bold",
                               anchor=S,
                               justify=CENTER)

       self.labelCpf = Label(self.janela,
                               text="Cpf",
                               font="bold",
                               anchor=S,
                               justify=CENTER)

       self.labelJotaEmpresa = Label(self.janela,
                         text="JOTA EMPRESAS",
                         anchor=S,
                         justify=CENTER,
                         font="courier 10 bold",
                         fg="Blue")
#=======================================

# CRIAR 2 BUTTON
       self.Bto_Incluir = Button(self.janela,
                    text="Incluir",
                    anchor=S,
                    justify=CENTER,
                   width=12,
                    fg="Blue",
                    command=self.sql
                    )

       self.Bto_Alterar = Button(self.janela,
                   text="Alterar",
                   anchor=S,
                   justify=CENTER,
                   width=12,
                   fg="Blue",
                   command=self.janela.destroy
                   )

       self.Bot_Excluir = Button(self.janela,
                               text="Excluir",
                               anchor=S,
                               justify=CENTER,
                               fg="Blue",
                               width=12,
                               command=self.janela.destroy
                               )

       self.Bot_Salvar = Button(self.janela,
                               text="Salvar",
                               anchor=S,
                               justify=CENTER,
                               fg="Blue",
                               width=12,
                               command=self.janela.destroy
                               )

       self.Bot_Editar = Button(self.janela,
                               text="Editar",
                               anchor=S,
                               justify=CENTER,
                               width=12,
                               fg="Blue",
                               command=self.janela.destroy
                               )
       self.Bot_Sair = Button(self.janela,
                              text="Sair",
                              anchor=S,
                              justify=CENTER,
                              width=12,
                              fg="Blue",
                              command=self.janela.destroy
                              )


# GRID, REALIZA O POSICIONAMENTO

       self.campoUsuario.focus()
       self.labelUsuario.grid(row=3, column=1, sticky=W)
       self.labelSenha.grid(row=4, column=1, sticky=W)
       self.labelEmeil.grid(row=5, column=1, sticky=W)
       self.labelCpf.grid(row=6, column=1, sticky=W)
       self.Bot_Editar.grid(row=7, column=2, sticky='w')
       self.Bto_Incluir.grid(row=7, column=2, sticky='ne')
       self.Bto_Alterar.grid(row=8, column=2, sticky='w')
       self.Bot_Excluir.grid(row=8, column=2, sticky='ne')
       self.Bot_Salvar.grid(row=9, column=2, sticky='w')
       self.Bot_Sair.grid(row=9, column=2, sticky='ne')
       self.campoUsuario.grid(row=3, column=2, sticky='we')
       self.campoSenha.grid(row=4, column=2, sticky='we')
       self.campoemail.grid(row=5, column=2, sticky='we')
       self.campocpf.grid(row=6, column=2, sticky='we')
       self.labelJotaEmpresa.grid(row=1, column=2, sticky="we")

    def sql(self):
        '''MÉTODO PARA OBTER O VALOR DO USUARIO E SENHA DIGITADA'''
        global usuario_digitado, senha_digitada
        self.usuario_digitado = self.campoUsuario.get()
        self.senha_digitada = self.campoSenha.get()
        #print(self.usuario_digitado, self.senha_digitada)

        '''COMANDO SQL, QUE SERÁ PASSADO COMO PARAMETRO'''
        sql = f'''select * from brasil
                         where nome='{self.usuario_digitado}' and senha='{self.senha_digitada}';'''
        #print(f'USUARIO DIGITADO: {self.usuario_digitado}\nSENHA DIGITADA: {self.senha_digitada}')
        self.conferir_usuario_v(sql)

    '''CONFERIR USUÁRIO'''
    def conferir_usuario_v(self,sql):

        if self.usuario_digitado != "":
            #print("Jota Contabilidade", "USUÁRIO PREENCHIDA")
            self.conferir_senha_v(sql)
        else:
            messagebox.showinfo('CONFERIR USUÁRIO', 'O CAMPO USUÁRIO ESTÁ FAZIO')


    '''CONFERIR SENHA'''
    def conferir_senha_v(self,sql):
        if self.senha_digitada != "":
            #print("Jota Contabilidade", "SENHA PREENCHIDA")
            self.conectar_buscar(sql)
        else:
            return messagebox.showinfo('CONFERIR SENHA','CAMPO SENHA ESTÁ VAZIO')

    '''CONECTAR AO BANCO DE DADOS E EXECUTAR A SQL E RETORNA USUARIO E SENHA SE FOR VERDADEIRO'''
    def conectar_buscar(self,sql):
        conexao_BD.Metodos.metodo_coleta(sql)
        for self.variavel in conexao_BD.Metodos.metodo_coleta(sql).comite_resultado:
            self.conferir_usuario(self.variavel)
            return
        else:

            messagebox.showinfo('ERRO NO LOGIN','USUÁRIO OU SENHA NÃO CONFERE, TENTE NOVAMENTE!!!')
        return

    def conferir_usuario(self,variavel):
        if variavel == None:
            messagebox.showinfo("Jota Contabilidade", "USUÁRIO OU SENHA ERRADA, TENTE NOVAMENTE!!")

            #print('Acesso Negado, Usuário ou Senha não Cofere')
        else:
            self.janela.destroy()




Janela_Clientes()
mainloop()
tk=Janela_Clientes()
>>>>>>> e0d3730bea969cc3d364f49962dfe3e7c16abdcc

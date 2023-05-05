'''IMPORTAR AS BIBLIOTECAS'''
from tkinter import *
from tkinter import messagebox
import conexao_BD
import janelaPrincipal

class Janela:
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
       self.altura = 150
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

# CRIAR OS CAMPOS ( LABEL )
       self.labelUsuario = Label(self.janela,
                     text="USUARIO",
                     font="bold",
                     anchor=S,
                     justify=CENTER)

       self.labelSenha = Label(self.janela,
                   text="SENHA",
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
       self.botaoEntar = Button(self.janela,
                    text="ENTRAR",
                    anchor=S,
                    justify=CENTER,
                    fg="Blue",
                    command=self.sql
                    )

       self.botaoSair = Button(self.janela,
                   text="SAIR",
                   anchor=S,
                   justify=CENTER,
                   fg="Blue",
                   command=self.janela.destroy
                   )


# GRID, REALIZA O POSICIONAMENTO

       self.campoUsuario.focus()
       self.labelUsuario.grid(row=3, column=1, sticky=W)
       self.labelSenha.grid(row=4, column=1, sticky=W)
       self.botaoEntar.grid(row=5, column=2, sticky='we')
       self.botaoSair.grid(row=6, column=2, sticky='we')
       self.campoUsuario.grid(row=3, column=2, sticky='we')
       self.campoSenha.grid(row=4, column=2, sticky='we')
       self.labelJotaEmpresa.grid(row=1, column=2, sticky="we")

    def sql(self):
        '''MÉTODO PARA OBTER O VALOR DO USUARIO E SENHA DIGITADA'''
        global usuario_digitado, senha_digitada
        self.usuario_digitado = self.campoUsuario.get()
        self.senha_digitada = self.campoSenha.get()
        #print(self.usuario_digitado, self.senha_digitada)
        tabela=conexao_BD.conectar.tabela
        '''COMANDO SQL, QUE SERÁ PASSADO COMO PARAMETRO'''
        sql = f'''select * from {tabela}
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
            print("Acesso Liberado")
            self.janela.destroy()
    def d (self):
        j=janelaPrincipal()
        j=tk.




Janela()
mainloop()
tk=Janela()
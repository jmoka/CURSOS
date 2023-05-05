'''IMPORTAR AS BIBLIOTECAS'''
from tkinter import *
from tkinter import messagebox
from Banco_de_Dados import conexao_BD


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
       self.camponome = Entry(self.janela,
                     font="Arial 12 bold italic",
                     width=20,
                     bd=5,
                     relief='groove',
                     justify=LEFT,
                     state='disabled',
                              )

       self.campocpf = Entry(self.janela,
                   font="Arial 12 bold italic",
                   width=20,
                   bd=5,
                   relief='groove',
                   justify=LEFT,
                   state='disabled')

       self.campoemail = Entry(self.janela,
                                 font="Arial 12 bold italic",
                                 width=20,
                                 bd=5,
                                 relief='groove',
                                 justify=LEFT,
                                 state='disabled')
       self.camposenha = Entry(self.janela,
                               font="Arial 12 bold italic",
                               width=20,
                               bd=5,
                               relief='groove',
                               justify=LEFT,
                               state='disabled')

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
                    command= self.com_bot_incluir,
                    bg="green"
                    )

       self.Bto_Alterar = Button(self.janela,
                   text="Alterar",
                   anchor=S,
                   justify=CENTER,
                   width=12,
                   fg="Blue",
                   command='',
                   bg="white"
                   )

       self.Bot_Excluir = Button(self.janela,
                               text="Excluir",
                               anchor=S,
                               justify=CENTER,
                               fg="Blue",
                               width=12,
                               command=self.janela.destroy,
                               bg="white"
                               )

       self.Bot_Salvar = Button(self.janela,
                               text="Salvar",
                               anchor=S,
                               justify=CENTER,
                               fg="Blue",
                               width=12,
                               command=self.sql,
                                bg="white"
                               )

       self.Bot_Editar = Button(self.janela,
                               text="Editar",
                               anchor=S,
                               justify=CENTER,
                               width=12,
                               fg="Blue",
                               command="",
                                bg="white",
                               )
       self.Bot_Sair = Button(self.janela,
                              text="Sair",
                              anchor=S,
                              justify=CENTER,
                              width=12,
                              fg="Blue",
                              command=self.janela.destroy,
                              bg="white"
                              )


# GRID, REALIZA O POSICIONAMENTO

       self.camponome.focus()
       self.labelUsuario.grid(row=3, column=1, sticky=W)
       self.labelSenha.grid(row=6, column=1, sticky=W)
       self.labelEmeil.grid(row=5, column=1, sticky=W)
       self.labelCpf.grid(row=4, column=1, sticky=W)
       self.Bot_Editar.grid(row=7, column=2, sticky='w')
       self.Bto_Incluir.grid(row=7, column=2, sticky='ne')
       self.Bto_Alterar.grid(row=8, column=2, sticky='w')
       self.Bot_Excluir.grid(row=8, column=2, sticky='ne')
       self.Bot_Salvar.grid(row=9, column=2, sticky='w')
       self.Bot_Sair.grid(row=9, column=2, sticky='ne')
       self.camponome.grid(row=3, column=2, sticky='we')
       self.camposenha.grid(row=6, column=2, sticky='we')
       self.campoemail.grid(row=5, column=2, sticky='we')
       self.campocpf.grid(row=4, column=2, sticky='we')
       self.labelJotaEmpresa.grid(row=1, column=2, sticky="we")

    def sql(self):
        '''MÉTODO PARA INSERIR VALOR NO BANCO DE DADOS'''
        self.nome = self.camponome.get()
        self.cpf = self.campocpf.get()
        self.email = self.campoemail.get()
        self.senha = self.camposenha.get()
        #print(self.usuario_digitado, self.senha_digitada)

        '''COMANDO SQL, QUE SERÁ PASSADO COMO PARAMETRO'''
        sql = f''' insert into brasil
                   (nome,cpf,email,senha) 
                   VALUES 
                   ("{self.nome}","{self.cpf}","{self.email}","{self.senha}");'''
        print(f'USUARIO DIGITADO: {self.nome}\nCPF DIGITADA: {self.cpf}\nEMAIL DIGITADO: {self.email}\nSENHA DIGITADA: {self.senha}')
        self.conferir_nome(sql)

    '''CONFERIR USUÁRIO'''
    def conferir_nome(self,sql):

        if self.nome != "":
            #print("Jota Contabilidade", "USUÁRIO PREENCHIDA")
            self.conferir_cpf(sql)
        else:
            messagebox.showinfo('CONFERIR NOME', 'O CAMPO NOME ESTÁ FAZIO, CAMPO OBRIGATÓRIO')
    def conferir_cpf(self,sql):

        if self.cpf != "":
            #print("Jota Contabilidade", "USUÁRIO PREENCHIDA")
            self.conferir_senha(sql)
        else:
            messagebox.showinfo('CONFERIR CPF', 'O CAMPO CPF ESTÁ FAZIO, COMPO OBRIGATÓRIO')


    '''CONFERIR SENHA'''
    def conferir_senha(self,sql):
        if self.senha != "":
            #print("Jota Contabilidade", "SENHA PREENCHIDA")
            self.conectar_buscar(sql)
        else:
            return messagebox.showinfo('CONFERIR SENHA','CAMPO SENHA ESTÁ VAZIO. COMPO OBRIGATÓRIO')

    '''CONECTAR AO BANCO DE DADOS E EXECUTAR A SQL E RETORNA USUARIO E SENHA SE FOR VERDADEIRO'''
    def conectar_buscar(self,sql):
        conexao_BD.Metodos.metodo_conexao(sql)
        self.limpar()

    def limpar(self):
        self.camponome.delete(0,END)
        self.campocpf.delete(0, END)
        self.campoemail.delete(0, END)
        self.camposenha.delete(0, END)
        self.camponome.focus()
        self.com_bot_salvar()

    def com_bot_incluir(self):
        print('s')
        self.camponome['state']='normal'
        self.campocpf['state'] = 'normal'
        self.campoemail['state'] = 'normal'
        self.camposenha['state'] = 'normal'
        self.camponome.focus()
        self.Bto_Incluir["state"]="disabled"
        self.Bot_Salvar["bg"]="green"
        self.Bto_Incluir["bg"]="white"
    def com_bot_salvar(self):
        print('s')
        self.camponome['state']='disabled'
        self.campocpf['state'] = 'disabled'
        self.campoemail['state'] = 'disabled'
        self.camposenha['state'] = 'disabled'
        self.camponome.focus()
        self.Bto_Incluir["state"]="normal"
        self.Bot_Salvar["bg"]="white"
        self.Bto_Incluir["bg"]="green"







Janela_Clientes()
mainloop()
tk=Janela_Clientes()


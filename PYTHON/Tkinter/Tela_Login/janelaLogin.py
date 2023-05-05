from tkinter import *
from tkinter import messagebox
import bancoDados
import janelaPrincipal


global usuario_digitado, senha_digitada


def globais():
    global usuario_digitado, senha_digitada
    usuario_digitado = campoUsuario.get()
    senha_digitada = campoSenha.get()
    print(f'USUARIO DIGITADO: {usuario_digitado}\nSENHA DIGITADA: {senha_digitada}')

    conferir_usuario_v(usuario_digitado)


def conferir_usuario_v(usuario_digitado):
    if usuario_digitado != "":
        print('usuario')
        conferir_usuario_bd(usuario_BD, usuario_digitado)
    else:
        return messagebox.showinfo("Jota Contabilidade", "CAMPO USUÁRIO ESTÁ VAZIO")


def conferir_senha_v(senha_digitada):
    if senha_digitada != "":
        print('senha')
        conferir_senha_bd(senha_digitada, senha_BD)
    else:
        return messagebox.showinfo("Jota Contabilidade", "CAMPO SENHA ESTÁ VAZIO")


# =======================================
usuario_BD = bancoDados.instancia_bd.usuario
senha_BD = bancoDados.instancia_bd.senha


def conferir_usuario_bd(usuario_BD, usuario_digitado):
    if usuario_digitado == usuario_BD:
        conferir_senha_v(senha_digitada)
        print("USUÁRIO CORRETO")
    else:
        return messagebox.showinfo("Jota Contabilidade", "USUARIO ERRÁDO, TENTE NOVAMENTE!!")


def conferir_senha_bd(senha_digitada, senha_BD):
    if senha_digitada == senha_BD:
        messagebox.showinfo("Jota Contabilidade", " ACESSO LIBERADO!!")
        janela1.destroy()
        janelaPrincipal.abrir_janela()
        
        

    else:
        return messagebox.showinfo("Jota Contabilidade", "SENHA ERRADA, TENTE NOVAMENTE!!")


# =====================================


janela1 = Tk()

janela1.title("Missão Prática 4 (Login)")
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

# CRIAR 2 BUTTON
botaoEntar = Button(janela1,
                    text="ENTRAR",
                    anchor=S,
                    justify=CENTER,
                    fg="Blue",
                    command=globais
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

janela1.mainloop()

# =========================================
# instanciar valor digitado












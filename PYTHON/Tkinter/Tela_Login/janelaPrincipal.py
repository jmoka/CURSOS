# IMPORTAR TKINTER
from tkinter import *
#import janelaLogin

def abrir_janela():
    janela = Tk()

    # TÍTULO DA JANELA
    janela.title("Missão Prática 4")

    # POSICIONAMENTO DA JANELA
    # LARGULA
    largura1 = janela.winfo_screenmmwidth()

    # ALTURA
    altura1 = janela.winfo_screenmmwidth()

    # POSICIONAMENTO
    largura = 990
    altura = 650
    posicao_x = largura1 - largura1 / 2
    posicao_y = altura1 / 2 - altura1 / 2

    # USAR O GEOMETRIA , COMANDO GEOMETRY
    janela.geometry(f"%dx%d+%d+%d" % (largura, altura, posicao_x, posicao_y))

    janela.mainloop()


if __name__ == "__main__":
    abrir_janela()

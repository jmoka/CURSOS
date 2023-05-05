import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QToolTip


class Janela(QMainWindow):
    def __init__(self):
        super().__init__()

        self.esquerda=100
        self.topo = 100
        self.largura=800
        self.altura=600
        self.titulo='Primeira Janela'
        # botão 1
        botao1 = QPushButton("Botão1", self)
        botao1.move(150, 200)
        botao1.resize(150, 80)
        botao1.setStyleSheet('QPushButton {background-color:#0FB328; font:bold; font-size:20px}')
        botao1.clicked.connect(self.imprimir)

        # botão 2
        botao2 = QPushButton("Botão2", self)
        botao2.move(350, 200)
        botao2.resize(150, 80)
        botao2.setStyleSheet('QPushButton {background-color:#0FB328; font:bold; font-size:20px}')
        botao2.clicked.connect(self.imprimir2)

        self.carregar_janela()




    def carregar_janela(self):
        self.setGeometry(self.esquerda,self.topo,self.largura,self.altura)
        self.setWindowTitle(self.titulo)
        self.show()

    def imprimir(self):
        print('imprimir 1')
    def imprimir2(self):
        print('imprimi 2')


aplicacao=QApplication(sys.argv)
janeja1=Janela()
sys.exit(aplicacao.exec_())

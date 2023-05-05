import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QToolTip
class Janela(QMainWindow):
    def _init_(self):
        super().__init__()

        self.esquerda=100
        self.topo = 100
        self.largura=800
        self.altura=600
        self.titulo='Primeira Janela'

        self.carregar_janela()


    def carregar_janela(self):
        self.setGeometry(self.esquerda, self.topo, self.largura, self.altura)
        self.setWindowTitle(self.titulo)
        self.show()


aplicacao=QApplication(sys.argv)
janeja1=Janela()
sys.exit(aplicacao.exec_())


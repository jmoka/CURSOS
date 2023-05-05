'''CRIANDO BOTÃO COM E EXECUTANDO O COMANDO E DEIXAR A JANELA FIXA '''

"""PARA ISSO IMPORTAREMOS NOVAS BIBLIOTECAS"""
'''QPushButton, from PySide2.QtCore import QSize'''

'''IMPORTANDO AS BIBLIOTECAS'''
from PySide2.QtWidgets import QApplication, QMainWindow, QPushButton
from PySide2.QtCore import QSize
import sys

'''CRIAÇÃO DA CLASSE'''
class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow,self).__init__()

        '''DANDO O NOME DO TÍTULO'''
        self.setWindowTitle("My Frist App-  Aula 3")

        '''CRIAR AS FERRAMENTAS AS WIDGES'''

        '''BOTÕES : QPushButton '''
        button=QPushButton("clique Aqui") # Texto do Botão
        self.setCentralWidget(button) # Criar o Botão
        button.clicked.connect(self.clicked_button)


        '''DIMENCIONANDO A TELA , DE FORMA FIXA'''
        '''SENDO O PRIMEIRO PAMETRO EIXO Y E O SEGUNDO EIXO X'''
        self.setFixedSize(QSize(300,300))

        '''MÉTODOS'''
    def clicked_button(self):
        print('botão clicado')







'''INSTANCIANDO A APLICAÇÃO'''
app=QApplication(sys.argv)
'''CRIANDO A JANELA'''
window=MainWindow()
'''ABRINDO A JANELA'''
window.show()
'''EXECUTANDO A APLICAÇÃO'''
app.exec_()






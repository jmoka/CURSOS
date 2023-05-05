''' CRIANDO UMA LABEL'''

'''IMPORTAR A BIBLIOTECA QT'''

'''IMPORTANDO AS BIBLIOTECAS'''
from PySide2.QtWidgets import QApplication, QMainWindow, QPushButton, QLabel
from PySide2.QtCore import Qt, QSize
import sys

'''CRIAÇÃO DA CLASSE'''
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        '''DANDO O NOME DO TÍTULO'''
        self.setWindowTitle("My Frist App- Aula 5")

        '''CRIAR AS FERRAMENTAS AS WIDGES'''

        '''LABEL: QLabel'''
        self.janela_1= QLabel("MEU PRIMEIRO PROGRAMA")
        font=self.janela_1.font()
        font.setPointSize(40)
        self.janela_1.setFont(font)
        self.janela_1.setAlignment(Qt.AlignHCenter | Qt.AlignVCenter)
        self.setCentralWidget(self.janela_1)

        '''DIMENCIONANDO A TELA , DE FORMA FIXA'''
        '''SENDO O PRIMEIRO PAMETRO EIXO Y E O SEGUNDO EIXO X'''
        self.setFixedSize(QSize(800,700))



'''INSTANCIANDO A APLICAÇÃO'''
app=QApplication(sys.argv)
'''CRIANDO A JANELA'''
window=MainWindow()
'''ABRINDO A JANELA'''
window.show()
'''EXECUTANDO A APLICAÇÃO'''
app.exec_()






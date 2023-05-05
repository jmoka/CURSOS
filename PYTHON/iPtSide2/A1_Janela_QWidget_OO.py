'''CRIANDO UMA JENELA USANDO ORIANTAÇÃO A OBJETO '''
''' MÉTODO QWidget'''

'''
Widget = FERRAMENTAS
Application = INSCRIÇÃO
Window = JANELA
Show = MOSTAR
App : APLICATIVO
Side = LADO
Main = A PRINCIPAL
Main Window = JANELA PRINCIPAL

link com as bibliotecas para Importação
PySide2.QtWidget = https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/index.html
'''
'''
from PySide2.QtWidgets import QApplication, QWidget, QMainWindow
import sys

class JanelaPrincipal(QMainWindow):
    def __init__(self):
        super(JanelaPrincipal).__init__()
        
        setWindowTitle("nome da janela")
            
        
if __name__=="__main__":
    app=QApplication(sys.argv)
    janela_principal=QWidget()
    janela_principal=Show()
    app.exec_()
    
'''


"""Para isso Importaremos a Biblioteca MainWindow"""

'''IMPORTANDO AS BIBLIOTECAS'''
from PySide2.QtWidgets import QApplication, QWidget, QMainWindow
import sys

'''CRIAÇÃO DA CLASSE'''
'''JANELA PRINCIPAL - MainWindow'''
class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow,self).__init__()
        '''DANDO O NOME DO TÍTULO'''
        self.setWindowTitle("My Frist App -  Aula 2")


if __name__=="__main__":
    '''INSTANCIANDO A APLICAÇÃO'''
    app=QApplication(sys.argv)
    '''CRIANDO A JANELA'''
    window=QWidget()
    '''ABRINDO A JANELA'''
    window.show()
    '''EXECUTANDO A APLICAÇÃO'''
    app.exec_()
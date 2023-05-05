'''CRIANDO JANELA SIMPLES USANDO MÉTODO QWidget'''
'''IMPORTANDO AS BIBLIOTECAS'''
'''
Widget = FERRAMENTAS
Application = INSCRIÇÃO
Window = JANELA
Show = MOSTAR
App : APLICATIVO
Side = LADO

link com as bibliotecas para Importação
PySide2.QtWidget = https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/index.html

from PySide2.QtWidgets import QApplication, QWidget
import sys

app=QApplication(sys.argv)
janela=QWidget()
janela.show()
app.exec_()

'''
from PySide2.QtWidgets import QApplication, QWidget
import sys
'''INSTANCIANDO A APLICAÇÃO'''
app=QApplication(sys.argv)
'''CRIANDO A JANELA'''
window=QWidget()
'''ABRINDO A JANELA'''
window.show()
'''EXECUTANDO A APLICAÇÃO'''
app.exec_()

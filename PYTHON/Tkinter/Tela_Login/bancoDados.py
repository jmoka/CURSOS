class bd:
    def __init__(self,usuario, senha):
        self.setusuario(usuario)
        self.setsenha(senha)
# set
    def setusuario(self, usuario):
        self.usuario=usuario
    def setsenha(self,senha):
        self.senha=senha
# get
    def getusuario(self):
        return self.usuario
    def getsenha(self):
        return self.senha


instancia_bd=bd("admin","admin")
print(f'usuari_BD_direto:{instancia_bd.usuario}, senha_BD_direta:{instancia_bd.senha}')
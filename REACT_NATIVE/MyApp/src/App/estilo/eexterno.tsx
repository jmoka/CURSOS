import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
  fundo: {
    backgroundColor: '#2C3639',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  Text: {
    color: '#f1f1f1', // Branco padrão comercial
    fontSize: 24,
    fontWeight: 'bold',
  },
  safeArea: {
    backgroundColor: '#A27B', // Cinza claro padrão comercial
    marginTop: 10,
    paddingStart: 10,
    height: 150,
  },
  buttonAlinhar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 15,
  },
  buttonAdicionar: {
    backgroundColor: '#FFD93D', // Amarelo padrão comercial
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    height: 60,
  },
  button: {
    backgroundColor: '#FFD93D', // Amarelo padrão comercial
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1A120B', // Branco padrão comercial
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonBlue: {
    backgroundColor: 'blue',
  },
  buttonGreen:{
    backgroundColor: 'green',
  },
  inputs: {
    backgroundColor: '#3C2A21',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 10,
    borderRadius: 6,
  },
  inputsEditar: {
    backgroundColor: '#f1f1f1',
    color: '#1A120B',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 10,
    borderRadius: 6,
    width: '100%',
  },
  containerEditar :{
    backgroundColor: '#f1f1f1',
    width: 100,
  }
})



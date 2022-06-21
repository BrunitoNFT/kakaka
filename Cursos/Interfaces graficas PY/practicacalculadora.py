from cgitb import text
from tkinter import *

raiz = Tk()

miFrame = Frame(raiz)

miFrame.pack()


#----------------------PANTALLA----------------------------------
numeroPantalla = StringVar()

pantalla = Entry(miFrame, width=30, textvariable=numeroPantalla)
pantalla.grid(row=0,column=0,columnspan=4, pady=10, padx=10)
pantalla.config(background='black', fg ="#03f943", justify='right')

#-------------------Pulsaciones----Numeros-----------------------



def numeroPulsado(num):

    numeroPantalla.set( numeroPantalla.get() + num)

#------------------------------SIGNOS-----------------------------

global contador
contador = 0
global num
global num1
global num2
global signo
num = False
num1 = False
num2 = False
signo = ""

def signoss(signo):
    if contador==0:
        num1 = float(numeroPantalla.get())
    elif contador==1:
        num2 = float(numeroPantalla.get())
    if signo == "+" and num1!=False and num2!=False:
        num = num1 + num2
    elif signo == "X":
        pass
    elif signo == "/":
        pass
    elif signo == "%":
        pass
    elif signo == "CE":
        pass
    elif signo == "<-":
        pass
    elif signo == "=":
        pass


    if num1!=0 and num2!=0:
        num = num1 + signo
    numeroPantalla.set("")

    contador = contador +1
#-------------------PRIMERA--LINEA-------------------------------

boton7 = Button(miFrame, text='7', width=3, command=lambda:numeroPulsado("7"))
boton7.grid(row=1,column=0, pady=5)

boton8 = Button(miFrame, text='8', width=3, command=lambda:numeroPulsado("8"))
boton8.grid(row=1,column=1, pady=5)

boton9 = Button(miFrame, text='9', width=3, command=lambda:numeroPulsado("9"))
boton9.grid(row=1,column=2, pady=5)

botonx = Button(miFrame, text='X', width=3, command=lambda:signoss("x"))
botonx.grid(row=1,column=3, pady=5)

#-------------------SEGUNDA--LINEA-------------------------------

boton4 = Button(miFrame, text='4', width=3, command=lambda:numeroPulsado("4"))
boton4.grid(row=2,column=0, pady=5)

boton5 = Button(miFrame, text='5', width=3, command=lambda:numeroPulsado("5"))
boton5.grid(row=2,column=1, pady=5)

boton6 = Button(miFrame, text='6', width=3, command=lambda:numeroPulsado("6"))
boton6.grid(row=2,column=2, pady=5)

botonMENOS = Button(miFrame, text='-', width=3)
botonMENOS.grid(row=2,column=3, pady=5)

#-------------------TERCERA--LINEA-------------------------------

boton1 = Button(miFrame, text='1', width=3, command=lambda:numeroPulsado("1"))
boton1.grid(row=3,column=0, pady=5)

boton2 = Button(miFrame, text='2', width=3, command=lambda:numeroPulsado("2"))
boton2.grid(row=3,column=1, pady=5)

boton3 = Button(miFrame, text='3', width=3, command=lambda:numeroPulsado("3"))
boton3.grid(row=3,column=2, pady=5)

botonMAS = Button(miFrame, text='+', width=3)
botonMAS.grid(row=3,column=3, pady=5)

#-------------------CUARTA--LINEA-------------------------------

botonDIVIDIR = Button(miFrame, text='/', width=3)
botonDIVIDIR.grid(row=4,column=0, pady=5)

boton0 = Button(miFrame, text='0', width=3, command=lambda:numeroPulsado("0"))
boton0.grid(row=4,column=1, pady=5)

botonCOMA = Button(miFrame, text='.', width=3)
botonCOMA.grid(row=4,column=2, pady=5)

botonIGUAL = Button(miFrame, text='=', width=3)
botonIGUAL.grid(row=4,column=3, pady=5)

#-------------------QUINTA--LINEA-------------------------------

botonPORCENTAJE = Button(miFrame, text='%', width=3)
botonPORCENTAJE.grid(row=5,column=0, pady=5)

botonCE = Button(miFrame, text='CE', width=3)
botonCE.grid(row=5,column=1, pady=5)

botonBORRAR = Button(miFrame, text='<-', width=3)
botonBORRAR.grid(row=5,column=2, pady=5)

botonNOSE = Button(miFrame, text='', width=3)
botonNOSE.grid(row=5,column=3, pady=5)

















raiz.mainloop()
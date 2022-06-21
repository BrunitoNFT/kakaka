from cProfile import label
from cgitb import text
from tkinter import *
from turtle import width

def poly():
    print("Estamos en la red de polygon")

def bsc():
    print("Estamos en la Binance Smart")

raiz = Tk()

raiz.title(" Sniper BOT - Brunito NFT")

raiz.resizable(False,False)

raiz.iconbitmap('channels4_profile (1).ico')

raiz.geometry('850x450')

miFrame = Frame(raiz)

miFrame.pack()

barraMenu=Menu(raiz)
raiz.config(menu=barraMenu)

block = Menu(barraMenu)
block.add_command(label="Smart Chain", command=lambda:bsc())
block.add_command(label="Polygon",command=lambda:poly())

barraMenu.add_cascade(label="BlockChain", menu=block)


cantidadbnb = Entry(miFrame)
textobnb = Label(miFrame, text= "BNB: ")
textobnb.grid(row=0,column=0)
cantidadbnb.grid(row=0,column=1,padx=10)

cantidadstable = Entry(miFrame)
textostable = Label(miFrame, text= "USD: ")
textostable.grid(row=0,column=2)
cantidadstable.grid(row=0,column=3,padx=10)

varOpcion = IntVar()

def fungas():
    pass

textlabgas = Label(miFrame, text="G A S: ")
textlabgas.grid(row=0,column=4)

y = Radiobutton(miFrame, text='Modo Ahorro   +30s ( Minimo )', variable=varOpcion,value=1,command=fungas())
u = Radiobutton(miFrame, text='Modo Market   -15s (0,5K GAS)', variable=varOpcion,value=2,command=fungas())
i = Radiobutton(miFrame, text='Modo Beast     -8s (1k   GAS)', variable=varOpcion,value=3,command=fungas())
k = Radiobutton(miFrame, text='Modo Whale     -4s (5k   GAS)', variable=varOpcion,value=4,command=fungas())
j = Radiobutton(miFrame, text='Manual               ', variable=varOpcion,value=5,command=fungas())

y.grid(row=0,column=5)
u.grid(row=1,column=5)
i.grid(row=2,column=5)
k.grid(row=3,column=5)
j.grid(row=4,column=5)


minbnb = Entry(miFrame)
textominbnb = Label(miFrame, text= "Min BNB:  ")
textominbnb.grid(row=5,column=0)
minbnb.grid(row=5,column=1,pady=30,padx=10)

minstable = Entry(miFrame)
textominstable = Label(miFrame, text= "Min USD:  ")
textominstable.grid(row=5,column=2)
minstable.grid(row=5,column=3,pady=30,padx=10)

gas = Entry(miFrame)
gasTexto = Label(miFrame, text= "GAS:  ")
gasTexto.grid(row=5,column=4)
gas.grid(row=5,column=5,padx=10)

consola = Text(miFrame, width=50, height=7 )
consola.grid(row=6,column=0,pady=30, columnspan=5)



raiz.mainloop()
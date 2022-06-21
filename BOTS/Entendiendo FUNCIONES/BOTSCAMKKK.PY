from web3 import Web3
import json
from colorama import *

init()
print(Fore.RED+ "AVERGA"+ Fore.RESET)
web3 = Web3(Web3.HTTPProvider("https://bsc-dataseed.binance.org/"))


with open("bep20_abi_token.json","r") as abi_token:
            abi_token = json.load(abi_token)

with open("BSC_Swapper.json","r") as abi_swap:
            abi_swap = json.load(abi_swap)

token = web3.toChecksumAddress('0xe9e7cea3dedca5984780bafc599bd69add087d56')

sender_address = web3.toChecksumAddress('0xaA5C9b99D8B7E010859bb681397299De2339C5d2')

contrato_misterioso = web3.toChecksumAddress('0x18be7f977Ec1217B71D0C134FBCFF36Ea4366fCD')

contrato_final_swaper = web3.eth.contract(address=contrato_misterioso,abi=abi_swap)

contrato_final_token = web3.eth.contract(address=contrato_misterioso,abi=abi_token)

disabled = contrato_final_swaper.functions.getTokenInformations(token).call()[4] #True if Buy is enabled, False if Disabled.

abi_sell = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'


# TAXES FUNCIONALIDAD DESCIFRADA ---------------------------------------------------
# TAXES FUNCIONALIDAD DESCIFRADA ---------------------------------------------------
# TAXES FUNCIONALIDAD DESCIFRADA ---------------------------------------------------
a = contrato_final_swaper.functions.getTokenInformations(token).call() #True if Buy is enabled, False if Disabled.)=
for i in a:
    print (i)
buy_tax = round((a[0] - a[1]) / a[0] * 100)
sell_tax = round((a[2] - a[3]) / a[2] * 100)
print("TAX COMPRA: ",buy_tax)
print("TAX VENTA: ",sell_tax)
# TAXES FUNCIONALIDAD DESCIFRADA ---------------------------------------------------
# TAXES FUNCIONALIDAD DESCIFRADA ---------------------------------------------------
# TAXES FUNCIONALIDAD DESCIFRADA ---------------------------------------------------


# COMPRAR DESCIFRADO ---------------------------------------------------
# COMPRAR DESCIFRADO ---------------------------------------------------
# COMPRAR DESCIFRADO ---------------------------------------------------
disabled = contrato_final_swaper.functions.getTokenInformations(token).call()[4] #True if Buy is enabled, False if Disabled.
if disabled == True:
    print("Se puede comprar!")
else:
    print("NO SE PUEDE COMPRAR!")
# COMPRAR DESCIFRADO ---------------------------------------------------
# COMPRAR DESCIFRADO ---------------------------------------------------
# COMPRAR DESCIFRADO ---------------------------------------------------



if a[5] and a[6] == True:
    honeypot = False
    print("NO ES HONEYPOT")
else:
    honeypot = True
    print("ES HONEYPOT")

print ()


contractsold = web3.eth.contract(address=token, abi=abi_sell)
a = contractsold.functions.balanceOf(sender_address).call()
print (a)
 




call = contrato_final_swaper.functions.getOutputfromTokentoETH(token,int(a)).call()
print(call)
print(call[0])

a = int(call[0])
if a>123:
    print("xd")

print(web3.fromWei(call[0],"ether"))












"""
    def calcProfit(self):
        if self.amountForSnipe == 0.0:
            self.amountForSnipe = self.TXN.getOutputfromTokentoBNB()[0] / (10**18)
        a = ((self.amountForSnipe * self.tx) * self.tp) / 100
        b = a + (self.amountForSnipe * self.tx)
        return b



    def getOutputfromTokentoBNB(self):
        call = self.swapper.functions.getOutputfromTokentoETH(
            self.token_address,
            int(self.token_contract.functions.balanceOf(self.address).call()),
            ).call()
        Amount = call[0]
        Way = call[1]
        return Amount, Way
"""
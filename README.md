## Dependencies

* ethereumjs-testrpc 
* web3
* solc

Install missing dependencies with [npm](https://www.npmjs.com/). 

## Install
Start test network, using the ```testrpc``` command.

To compile and deploy contracts, run following commands :

```
>truffle compile
>truffle migrate --reset
```
With this, contract will be deployed to test network.

Use ```npm install``` command to download missing packages.

To start the server, run command ```npm start```, which will start the server on localhost:8080. There are two pages with following urls - 
 
* localhost:8080/seller.html
* localhost:8080/buyer.html

## Usage

Run the following commands to open the node console then deploy your contract to the test chain

```
canoodle:~/smart-cart$ testrpc
canoodle:~/smart-cart$ node
> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> code = fs.readFileSync('transaction.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)
> abiDefinition = JSON.parse(compiledCode.contracts[':transaction'].interface)
> transactionContract = web3.eth.contract(abiDefinition)
> byteCode = compiledCode.contracts[':transaction'].bytecode
> deployedContract = transactionContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
> deployedContract.address
> contractInstance = transactionContract.at(deployedContract.address)
```

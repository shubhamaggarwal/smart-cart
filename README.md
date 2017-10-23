## Dependencies

* ethereumjs-testrpc 
* web3
* solc

Install missing dependencies with [npm](https://www.npmjs.com/). 

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
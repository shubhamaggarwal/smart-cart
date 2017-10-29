var common = require("../../common");

// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';

// Import our contract artifacts and turn them into usable abstractions.
import abi from '../../build/contracts/Transaction.json';

var Transaction = contract(abi);

var accounts;
var account;
var transactionInstance;

function putContract() {

	Transaction.setProvider(web3.currentProvider);

	Transaction.new({from: accounts[0], gas: 3141592}).then(
	function(transaction) {
		console.log(transaction);
		transactionInstance = conf;
		$("#confAddress").html(transactionInstance.address);
	});

}

window.onload = function() {

	if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
    } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

	var self = this;

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

    accounts = accs;
    account = accounts[0];
    
});
};

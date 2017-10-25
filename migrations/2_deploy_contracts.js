var Transaction = artifacts.require("./Transaction.sol");

module.exports = function(deployer) {
  deployer.deploy(Transaction);
};

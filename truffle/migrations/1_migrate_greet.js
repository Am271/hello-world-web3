var greet = artifacts.require("Greet");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(greet);
};
import Web3 from 'web3';

import GreetBuild from 'contracts/Greet.json';

let selectedAccount;
let greetContract;
const providerUrl = 'http://localhost:7545';

export const init = async () => {
    let provider = window.ethereum;

    if(typeof provider !== 'undefined') {
      // Metamask is installed

      provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log('Selected account is ' + selectedAccount);
      })
      .catch((err) => {
        console.log(err);
      });

      window.ethereum.on('accountsChanged', function(accounts) {
        selectedAccount = accounts[0];
        console.log('Selected account changed to ' + selectedAccount);
      });
    }

    const web3 = new Web3(providerUrl);

    const networkId = await web3.eth.net.getId();

    greetContract = new web3.eth.Contract(GreetBuild.abi, GreetBuild.networks[networkId].address);
}

export const greet = () => {
    return greetContract.methods.greet().send({from: selectedAccount});
}
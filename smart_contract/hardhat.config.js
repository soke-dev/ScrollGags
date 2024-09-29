require('@nomiclabs/hardhat-waffle');
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: '0.8.0',
  networks: {
    scrollSepolia: {
      url: '', // ALCHEMY Alchemy API URL
      accounts: [''], //YOUR WALLET PRIVATE KEY
    },
  },
  etherscan: {
    
    apiKey: ""
  }
};
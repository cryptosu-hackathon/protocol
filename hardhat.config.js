require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// Possible network values
const RINKEBY = "RINKEBY"
const ROPSTEN = "ROPSTEN"
const LOCAL_NETWORK = "LOCAL_NETWORK"

// By default network is set to local, change it to TEST_NETWORK to make a switch
//const NETWORK = LOCAL_NETWORK

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

let networks = {};

networks = {
  rinkeby: {
    url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    accounts: [`0x${WALLET_PRIVATE_KEY}`]
  },
  ropsten: {
    url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    accounts: [`0x${WALLET_PRIVATE_KEY}`]
  }
}

module.exports = {
  solidity: "0.8.4",
  networks: networks
};

# Overview
The purpose of this project is to show the outline of a system to integrate an open-source game to the blockchain. We've worked on the application used by the gamer and the smart contracs. 

The purpose of this system is to bootstrap a play-to-earn economy on the game Osu! 
Players are rewarded with cryptocurrencies & NFTs for submitting their plays to a server that will act as an oracle (anti-cheat. Should the oracle deem the play legit, they will mint NFTs for this user to claim or aidrop some of the game currency.

We believe the outlines of this project can be reused on existing games with a lot of user-generated content, in order to align incentives of contributors and players alike.

# Design
![Sans-titre-2021-09-22-1246](https://user-images.githubusercontent.com/43751434/136706347-10f86230-875b-4730-b8ea-fc13afaa7586.png)

# Additional repos
- protocol shows all the smart contract & blockchain work: beatmap & NFT smart contracts
- [launcher repo](https://github.com/cryptosu-hackathon/launcher) shows the launcher for the Osu! application wrapped in an Electron App to perform all blockchain activities from the user side
- [Osu! repo](https://github.com/cryptosu-hackathon/osu) is the modified Osu! app bundled inside the Electron launcher
# Hardhat Setup

## First time project setup
Restore the project dependency

`npm install`  


## Run local hardhat node 

`npx hardhat node`

This will spin up the local node and list 20 local wallet address with their private key, all preloaded with 1000 ETH
  

 

## Contract Deployment,
- ### Local node  

	- Run the following command to deploy contract on localhost 

		`npx hardhat run scripts/deploy.js --network localhost`  

	- Copy the deployed contract address printed on console for reference

		TODO- Save this contract address automatically to some file

- ### Testnet (Rinkeby or Ropsten)  

	- Create a file by name `.env` inside the root directory of this project. Paste the following lines inside this .env file

		>    ALCHEMY_API_KEY = 'YOUR_ALCHEMY_API_KEY' 
		>    
		>    WALLET_PRIVATE_KEY = 'YOUR_WALLET_PRIVATE_KEY'

	- Replace `YOUR_ALCHEMY_API_KEY` with API key created using Alchemy  

	- Replace `YOUR_WALLET_PRIVATE_KEY` with private key obtained by following these steps

		1. Click on metamask plugin icon in the browser

		2. Select `Account details`

		3. Click `Export Private Key` button and confirm your password

			Process should be similar with other wallets.  

	- Run the following command to deploy contract on rinkeby network 

		`npx hardhat run scripts/deploy.js --network rinkeby`


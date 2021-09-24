
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

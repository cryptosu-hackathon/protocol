
## Hardhat Setup

### First time project setup
Restore the project dependency

`npm install`  

### Run local hardhat node 

`npx hardhat node`

This will spin up the local node and list 20 local wallet address with their private key, all preloaded with 1000 ETH
  

### Deploying contract to Local node  

Run the following command to deploy faucet on localhost 

`npx hardhat run scripts/deploy.js --network localhost`  

Copy the deployed contract address printed on console for reference

TODO- Save this contract address automatically to some file

  

### Deploy contract on Testnet (Rinkeby or Ropsten)  

1. Create a file by name `.env` inside the root directory of this project. Paste the following lines inside this .env file


 

>    ALCHEMY_API_KEY = 'YOUR_ALCHEMY_API_KEY' 
>     WALLET_PRIVATE_KEY = 'YOUR_WALLET_PRIVATE_KEY'

2. Replace `YOUR_ALCHEMY_API_KEY` with API key created using Alchemy  

3. Replace `YOUR_WALLET_PRIVATE_KEY` with private key obtained by following these steps

	1. Click on metamask plugin icon in the browser

	2. Select `Account details`

	3. Click `Export Private Key` button and confirm your password

		Process should be similar with other wallets.  

4. Run the following command to deploy faucet on rinkeby network 

`npx hardhat run scripts/deploy.js --network rinkeby`
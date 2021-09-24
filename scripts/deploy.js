const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const Contract = await hre.ethers.getContractFactory("Greeter");
    const contract = await Contract.deploy();

    await contract.deployed();
    console.log("Contract address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
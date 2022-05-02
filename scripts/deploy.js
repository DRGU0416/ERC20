const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("Token");
  console.log("Deploying...")
  const token = await Token.deploy('8888000000000000000000'); // 8888 token with 18 decimals
  
  await token.deployed();
  console.log("Token contract address:", token.address);
  console.log("Token deployed to:", deployer.address);
  console.log("Token name:", (await token.name()));
  console.log("Token symbol:", (await token.symbol()));
  console.log("Total supply:", (await token.totalSupply()));
  console.log("Deployer's amount:", (await token.balanceOf(deployer.address))); 
}

main()
  .then(() => {
    console.log(`Migration Succeed!`);
    process.exit(0);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

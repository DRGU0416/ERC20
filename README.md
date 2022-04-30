# ERC20

Issue a standard ERC20 tokens using OpenZeppelin framework.

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- [Ethers](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Hardhat](https://hardhat.org/) (Development Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)

## Setting Up
### 1. Clone/Download the Repository

Create a folder named "erc20" locally.

### 2. Install Dependencies
```
$ cd erc20
$ npm install
```
### 3. Boot up local development blockchain (hardhat)
```
$ cd erc20
$ npx hardhat node
```

### 4. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save.  


### 5. Migrate Smart Contracts
`npx hardhat run scripts/deploy.js --network localhost`

### 6. Run Tests
`$ npx hardhat test`

You should get something like this:

```
ERC20 contract
The owner address is: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
Total supply is: 12345678
    ✔ Deployment should assign the total supply of tokens to the owner (707ms)


  1 passing (710ms)
```

License
----
MIT

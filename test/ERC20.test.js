const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("ERC20 contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function() {
        const [owner] = await ethers.getSigners();

        const HardhatToken = await ethers.getContractFactory("Token");

        const hardhatToken = await HardhatToken.deploy(12345678);

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    });
});
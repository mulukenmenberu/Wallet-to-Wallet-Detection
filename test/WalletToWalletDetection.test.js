const WalletToWalletDetection = artifacts.require("WalletToWalletDetection");

contract("WalletToWalletDetection", (accounts) => {
    it("should detect wallet-to-wallet transfers", async () => {
        const contractInstance = await WalletToWalletDetection.deployed();

        const receipt = await contractInstance.transfer(accounts[1], { from: accounts[0], value: web3.utils.toWei("1", "ether") });
        const event = receipt.logs[0];

        assert.equal(event.event, "WalletToWalletTransfer", "Event name should be WalletToWalletTransfer");
        assert.equal(event.args.from, accounts[0], "From address should be accounts[0]");
        assert.equal(event.args.to, accounts[1], "To address should be accounts[1]");
        assert.equal(event.args.value.toString(), web3.utils.toWei("1", "ether"), "Transfer amount should be 1 ether");
    });
});

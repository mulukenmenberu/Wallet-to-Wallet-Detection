const WalletToWalletDetection = artifacts.require("WalletToWalletDetection");

module.exports = function (deployer) {
    deployer.deploy(WalletToWalletDetection);
};

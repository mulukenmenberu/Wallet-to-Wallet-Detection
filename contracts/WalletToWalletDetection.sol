// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WalletToWalletDetection {
    event WalletToWalletTransfer(address indexed from, address indexed to, uint256 value);

    function transfer(address payable _to) external payable {
        require(msg.value > 0, "Transfer amount must be greater than zero");
        require(isEOA(msg.sender), "Sender must be an EOA");
        require(isEOA(_to), "Recipient must be an EOA");

        (bool success, ) = _to.call{value: msg.value}("");
        require(success, "Transfer failed");

        emit WalletToWalletTransfer(msg.sender, _to, msg.value);
    }

    function isEOA(address account) internal view returns (bool) {
        uint32 size;
        assembly {
            size := extcodesize(account)
        }
        return (size == 0);
    }
}

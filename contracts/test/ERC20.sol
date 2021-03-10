pragma solidity =0.5.16;

import '../OniERC20.sol';

contract ERC20 is OniERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}

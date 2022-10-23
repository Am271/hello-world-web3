// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Greet {

    uint256 value;

    event newMessage (
        string msg
    );

    function setValue (uint256 val) public {
        value = val;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function greet() public {
        emit newMessage("Hello from contract");
    }
}
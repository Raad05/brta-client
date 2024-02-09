// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract LEAContract {
    struct LEA {
        address leaKey;
        string areaName;
    }
    mapping(address => LEA) public leaOffices;

    function addLEA(string memory _areaName) external {
        leaOffices[msg.sender] = LEA(msg.sender, _areaName);
    }

    function getLeaOffice(address _leaOffice) public view returns (LEA memory) {
        return leaOffices[_leaOffice];
    }
}

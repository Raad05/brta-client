// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract BrtaAuthority {
    struct Brta {
        address brtaKey;
        string areaName;
    }
    mapping(address => Brta) public brtaOffices;

    function addbrtaOffice(string memory _areaName) external {
        brtaOffices[msg.sender] = Brta(msg.sender, _areaName);
    }

    function getBrtaOffice(address _brtaKey) public view returns (Brta memory) {
        return brtaOffices[_brtaKey];
    }
}

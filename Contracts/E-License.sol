// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./Brta.sol";
import "./LEAContract.sol";

contract ELicense {
    struct User {
        string name;
        string licenseNumber;
        string dateOfBirth;
        bool validity;
        string issueingAuthority;
        uint256 grade;
        address licenseAddress;
        string[] offenses;
        string[] accidentHistory;
    }

    mapping(address => User) users;
    BrtaAuthority public brtaContractAddress;
    LEAContract public leaContractAddress;

    constructor(address _brtaContractAddress, address _leaContractAddress) {
        brtaContractAddress = BrtaAuthority(_brtaContractAddress);
        leaContractAddress = LEAContract(_leaContractAddress);
    }

    modifier Brtaonly() {
        BrtaAuthority.Brta memory brta = brtaContractAddress.getBrtaOffice(
            msg.sender
        );
        require(brta.brtaKey != address(0), "Only BRTA authority can access");
        _;
    }
    modifier LEAonly() {
        LEAContract.LEA memory lea = leaContractAddress.getLeaOffice(
            msg.sender
        );
        require(lea.leaKey != address(0), "Only LEA authority can access");
        _;
    }

    function upgradeLicense(address _licenseAddress) external payable Brtaonly {
        require(
            bytes(users[_licenseAddress].licenseNumber).length != 0,
            "User already exists"
        );
        users[_licenseAddress].grade = users[_licenseAddress].grade + 1;
    }

    function freezeLicense(address _licenseAddress) external payable Brtaonly {
        require(
            bytes(users[_licenseAddress].licenseNumber).length != 0,
            "User already exists"
        );
        users[_licenseAddress].validity = false;
    }

    function unfreezeLicense(
        address _licenseAddress
    ) external payable Brtaonly {
        require(
            bytes(users[_licenseAddress].licenseNumber).length != 0,
            "User already exists"
        );
        users[_licenseAddress].validity = true;
    }

    function getELicense() public view returns (User memory) {
        return users[msg.sender];
    }

    function addLicense(
        string memory _name,
        string memory _licenseNumber,
        string memory _dateOfBirth,
        address _licenseAddress
    ) external payable Brtaonly {
        BrtaAuthority.Brta memory brta = brtaContractAddress.getBrtaOffice(
            msg.sender
        );
        require(
            bytes(users[_licenseAddress].licenseNumber).length == 0,
            "User already exists"
        );

        users[_licenseAddress] = User(
            _name,
            _licenseNumber,
            _dateOfBirth,
            true,
            brta.areaName,
            1,
            _licenseAddress,
            new string[](0), // Initialize offenses as an empty array
            new string[](0)
        );
    }

    function addCriminalOffense(
        address _licenseAddress,
        string memory offense
    ) external payable LEAonly {
        users[_licenseAddress].offenses.push(offense);
    }

    function addAccident(
        address _licenseAddress,
        string memory accident
    ) external payable LEAonly {
        users[_licenseAddress].accidentHistory.push(accident);
    }
}

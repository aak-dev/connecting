pragma solidity >=0.4.21 <0.7.0;

contract SimpleContract {
  uint public number = 0;

  function setNumber(uint _number) public {
    number = _number;
  }
}
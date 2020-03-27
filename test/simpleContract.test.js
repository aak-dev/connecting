const SimpleContract = artifacts.require("SimpleContract");

contract("SimpleContract", accounts => {
  it("...should store the value 89.", async () => {
    const simpleContractInstance = await SimpleContract.deployed();

    // Set value of 89
    await simpleContractInstance.setNumber(89, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleContractInstance.number.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});

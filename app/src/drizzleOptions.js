import Web3 from "web3";
import SimpleContract from "./contracts/SimpleContract.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [SimpleContract],
};

export default options;

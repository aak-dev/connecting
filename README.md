# Readme

This repository contains all code for the smart contracts and front-end.

## Requirements / Dependencies
* Node
* NPM
* Truffle
* React.js

## Instructions

* Clone the repo `cd into the repo
* Run the following:
```
npm i -g truffle
npm install
cd app
npm install
```
* Start the truffle local network:
```
truffle develop
```
* Inside the network, compile the contracts and deploy them:
```
compile
migrate
```
* Open new terminal
* Run:
```
cd app
npm start
```

A browser window should open where you can interact with the contract

## Unit test
* Solidity unit tests are written in the tests directory, see the demo [test](./test/simpleContract.test.js);
* React unit tests can be written in there relavent compondents
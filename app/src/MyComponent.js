import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
import capital_fund_logo from "./capital_fund.png";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div>
        <img src={capital_fund_logo} alt="capital_fund_logo" />
      </div>

      <div className="section">
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>Simple Contract</h2>
        <p>
          This shows a simple ContractData component with no arguments, along
          with a form to set its value.
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SimpleContract"
            method="number"
          />
        </p>
        <ContractForm drizzle={drizzle} contract="SimpleContract" method="setNumber" />
      </div>
    </div>
  );
};

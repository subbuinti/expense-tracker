import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";

export const TransactionList = () => {
  // const context = useContext(GlobalContext);
  // console.log(context);
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

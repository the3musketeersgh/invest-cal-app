import React from "react";
import { calculateInvestmentResults } from "../util/investment";

function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return (
    <>
      <p>Results</p>
    </>
  );
}

export default Results;

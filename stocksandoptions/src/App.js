import React from "react";
import { MarketState } from "./contexts/MarketState";
import MarketData from "./components/MarketData"


function App() {
  return (
    <MarketState>
      <MarketData />
    </MarketState>
  );
}


export default App;

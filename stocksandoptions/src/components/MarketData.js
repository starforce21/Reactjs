import React, { useEffect } from "react";
import { useData } from "../contexts/MarketState";
import { getData, setLoading } from "../contexts/DataAction";


const MarketData = () => {
  const [ state, stateDispatch] = useData();
  const { data, loading, error, message } = state;


  
  const getInfoHandler =() => {
    getData(stateDispatch);
    setLoading(stateDispatch, false);
  };


  useEffect(() => {
    getInfoHandler();
  },[]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{message}</p>}
      <div>
        <div>
          SPY(S&P): {data[0].c}
        </div>
        <div>
          {data[0].dp}{data[0].d}
        </div>
      </div>
      <div>
        <div>
          QQQ(Nasdaq 100): {data[1].c}
        </div>
        <div>
          {data[1].dp}{data[1].d}
        </div>
      </div>
      <div>
        <div>
          DIA(DJI Average): {data[2].c}
        </div>
        <div>
          {data[2].dp}{data[2].d}
        </div>
      </div>
      <div>
        <div>
          VEA(Developed Markets): {data[3].c}
        </div>
        <div>
          {data[3].dp}{data[3].d}
        </div>
      </div>
      <div>
        <div>
          VWO(Emerging Markets): {data[4].c}
        </div>
        <div>
          {data[4].dp}{data[4].d}
        </div>
      </div>
    </div>
  );
};

export default MarketData;

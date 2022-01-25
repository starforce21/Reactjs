import React, { useEffect } from "react";
import { useData } from "../contexts/MarketState";
import { getData, setLoading } from "../contexts/DataAction";

const MarketData = () => {
  const [ state, stateDispatch] = useData();
  const { data, loading, error, message } = state;

  // get user info handler
  const getInfoHandler = async () => {
    await getData(stateDispatch);
    setLoading(stateDispatch, false);
  };

  // get user info
  useEffect(() => {
    getInfoHandler();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{message}</p>}
      <p>User name: {console.log(data)}</p>
    </div>
  );
};

export default MarketData;

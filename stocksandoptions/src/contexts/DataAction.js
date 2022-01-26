import axios from "axios";

// Set Loading
export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

// Set Error
export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message }
  });

// Set User (get user info)
export const getData = async dispatch => {
  setLoading(dispatch, true);

  // do fetch
  
  const requestSPY = await axios.get(`https://finnhub.io/api/v1/quote?symbol=SPY&token=c7o2nliad3idf06mljtg`)
  const requestQQQ = await axios.get(`https://finnhub.io/api/v1/quote?symbol=QQQ&token=c7o2nliad3idf06mljtg`)
  const requestDIA = await axios.get(`https://finnhub.io/api/v1/quote?symbol=DIA&token=c7o2nliad3idf06mljtg`)
  const requestVEA = await axios.get(`https://finnhub.io/api/v1/quote?symbol=VEA&token=c7o2nliad3idf06mljtg`)
  const requestVWO = await axios.get(`https://finnhub.io/api/v1/quote?symbol=VWO&token=c7o2nliad3idf06mljtg`)
  axios.all([requestSPY,requestQQQ,requestDIA,requestVEA,requestVWO])
  .then(res => {
    console.log(res)
      const result = res;

      // set user info
      dispatch({
        type: "SET_USER",
        payload: result
      });
    })
    .catch(error => {
      const result = error;

      // set error if has any
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: result
        }
      });
    });
};

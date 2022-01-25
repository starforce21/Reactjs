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
  await axios
    .get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=IbzW4PY8wxkA11GpBtVXPheMvKtGneHK`)
    .then(res => {
      const result = res.data;

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

import {
  SET_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/types";
import api from "../../utils/api";

//doctor register
export const getData = (user) => async (dispatch) => {
  console.log(user);
  const body = JSON.stringify(user);
  console.log(body);
  dispatch({
    type: SET_LOADING,
  });

  try {
    const res = await api.post("/doctor/register", body);
    console.log("response at req", res);
    if (res.data.success) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      return res.data;
    } else {
      console.log(res.data);
      dispatch({
        type: REGISTER_FAIL,
        payload: "Something went wrong!",
      });
      return res.data;
    }
  } catch (error) {
    console.log("returned :", error);
    dispatch({
      type: REGISTER_FAIL,
      payload: "Something went wrong!",
    });
  }
};


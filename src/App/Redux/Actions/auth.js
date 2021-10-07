import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/types";
import api from "../../Utils/api";


//user login
export const loginUser = (user) => async (dispatch) => {
  const body = JSON.stringify(user);

  try {
    const res = await api.post("/login", body);
    console.log("response at req", res);
    if (res.status==200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      return res.data;
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.status,
      });
      return res.data;
    }
  } catch (error) {
    console.log("error in catch", error);
    dispatch({
      type: LOGIN_FAIL,
      payload: "Something went wrong!",
    });
  }
};

//logout user
export const logoutUser = () => async(dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
    });
    return {success:true,message:"Logout Successfull"}
  } catch (error) {
    console.log(error)
    return { success: false, message: "Unable to logout" };

  }
};

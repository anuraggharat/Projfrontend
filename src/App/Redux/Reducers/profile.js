import {
  SET_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/types";

const initialState = {
  profileload:"",
  loading:""
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
}

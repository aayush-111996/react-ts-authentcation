import { ActionType, AuthState } from "../../types/authTypes";
import actionType from "../action/actionType";

const token = localStorage.getItem("token");

const initialState: AuthState = {
  token: token || "",
};

export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actionType.LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case actionType.LOGOUT:
      localStorage.removeItem("token");
      return { ...state, token: null };

    default:
      return state;
  }
};

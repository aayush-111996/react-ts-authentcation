import actionType from "../store/action/actionType";

export type AuthState = {
  token: string | null;
};

export type ActionType = {
  type: typeof actionType.LOGIN;
  payload?: any;
};

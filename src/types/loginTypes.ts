//component
export type DefaultForm = {
  username: string;
  password: string;
};

//action
export type FormType = {
  username: string;
  password: string;
};

export type LoginAction = {
  type: string;
  payload: string;
};

export type ActionType = LoginAction;

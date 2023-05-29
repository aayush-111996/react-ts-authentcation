import { Dispatch } from "redux";
import actionType from "./actionType";
import { FormType } from "../../types/loginTypes";
import { ActionType } from "../../types/authTypes";
import { loginApi } from "../../api/authApi";
import { toast } from "react-toastify";

export const loginAction =
  (form: FormType) =>
  async (dispatch: Dispatch<ActionType>): Promise<void> => {
    const body = JSON.stringify({
      username: form?.username,
      password: form?.password,
    });
    // username: 'kminchelle',
    // password: '0lelplR',
    try {
      const res = await loginApi(body);
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: actionType.LOGIN,
        payload: res?.data?.token,
      });
      localStorage.setItem("token", res?.data?.token);
    } catch (error) {
      toast.error("Invalid User", { position: toast.POSITION.TOP_RIGHT });
    }
  };

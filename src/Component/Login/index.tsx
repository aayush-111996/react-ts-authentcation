import React, { useRef, useState } from "react";
import { DefaultForm } from "../../types/loginTypes";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginAction } from "../../store/action/loginAction";
import SimpleReactValidator from "simple-react-validator";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const defaultForm = {
    username: "",
    password: "",
  };
  const simpleValidator = useRef<SimpleReactValidator>(
    new SimpleReactValidator()
  );
  const [, forceUpdate] = useState<number>();
  const [form, setForm] = useState<DefaultForm>(defaultForm);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (simpleValidator.current.allValid()) {
      const Action: any = loginAction(form);
      dispatch(Action);
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };
  
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input
                type="text"
                name="username"
                id="form2Example1"
                className="form-control"
                onChange={handleChange}
                onBlur={() =>
                  simpleValidator.current.showMessageFor("username")
                }
              />
              <div style={{ color: "red" }}>
                {simpleValidator.current.message(
                  "username",
                  form.username,
                  "required"
                )}
              </div>
              <label className="form-label" htmlFor="form2Example1">
                Username
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                name="password"
                id="form2Example2"
                className="form-control"
                onChange={handleChange}
                onBlur={() =>
                  simpleValidator.current.showMessageFor("password")
                }
              />
              <div style={{ color: "red" }}>
                {simpleValidator.current.message(
                  "password",
                  form.password,
                  "required"
                )}
              </div>
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

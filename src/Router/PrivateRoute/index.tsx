import { Navigate, Outlet } from "react-router-dom";
import { ROUTES_PATH } from "../../utils/constant";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Head from "../../Component/Header";

export const PrivateRoute = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  debugger;
  return token ? (
    <div id="wrapper">
      <div className="main">
        <div>
          <Head />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={ROUTES_PATH.LOGIN} />
  );
};

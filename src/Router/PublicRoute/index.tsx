import { Navigate, Outlet } from "react-router-dom";
import { ROUTES_PATH } from "../../utils/constant";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const PublicRoute = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return !token ? <Outlet /> : <Navigate to={ROUTES_PATH.DASHBOARD} />;
};

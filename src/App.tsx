import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { PrivateRoute } from "./Router/PrivateRoute";
import { PublicRoute } from "./Router/PublicRoute";
import { ROUTES_PATH } from "./utils/constant";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<PrivateRoute />}>
              <Route
                path={ROUTES_PATH.DASHBOARD}
                element={
                  <Suspense fallback={"Loading..."}>
                    <Dashboard />
                  </Suspense>
                }
              />
            </Route>
            <Route element={<PublicRoute />}>
              <Route
                path={ROUTES_PATH.LOGIN}
                element={
                  <Suspense fallback={"Loading...."}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={<Navigate replace to={ROUTES_PATH.LOGIN} />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

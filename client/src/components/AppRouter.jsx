import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact></Route>
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact></Route>
      ))}

      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
});

export default AppRouter;

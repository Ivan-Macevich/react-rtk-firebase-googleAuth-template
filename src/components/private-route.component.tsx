import React from "react";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../constants";

import { useAuth } from "../hooks/useAuth.hook";
import { Loading } from "../pages/loading.page";

type Props = {
  Component: React.ComponentType;
};

export function Private({ Component }: Props) {
  const user = useAuth();
  return  user === undefined ? <Navigate to={AppRoute.Login} /> :
  user === null ? <Loading /> :
  <Component />
}

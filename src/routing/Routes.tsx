import { Navigate, Routes as Paths, Route } from "react-router-dom";
import Home from "src/containers/Home";
import UserInfo from "src/containers/UserInfo";

export const AllRoutes = {
  ROOT: "/",
  BOILERPLATE_ROOT: "/home",
  USER_INFORMATION: "/user-info"
} as const;

const Routes = () => {
  return (
    <>
      <Paths>
        <Route path={AllRoutes.BOILERPLATE_ROOT} element={<Home />} />
        <Route path={AllRoutes.USER_INFORMATION} element={<UserInfo />} />
        <Route path="*" element={<Navigate to={AllRoutes.BOILERPLATE_ROOT} replace />} />
      </Paths>
    </>
  );
};

export default Routes;

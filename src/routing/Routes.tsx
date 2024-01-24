import { Navigate, Routes as Paths, Route } from "react-router-dom";
import Home from "src/containers/Home";

export const AllRoutes = {
  ROOT: "/",
  BOILERPLATE_ROOT: "/home"
} as const;

const Routes = () => {
  return (
    <>
      <Paths>
        <Route path={AllRoutes.BOILERPLATE_ROOT} element={<Home />} />
        <Route path="*" element={<Navigate to={AllRoutes.BOILERPLATE_ROOT} replace />} />
      </Paths>
    </>
  );
};

export default Routes;

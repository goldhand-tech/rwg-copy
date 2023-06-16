import { NavBar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

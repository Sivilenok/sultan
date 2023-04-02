import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

export const Layout = () => (
  <>
    <Header />
    <Breadcrumb/>
    <Outlet />
    <Footer />
  </>
);

import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { back } from "../../assets";
import styles from "./styles.module.scss";

export const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  }
  return (
    <>
      <Header />
      {isMobile ? (
        <button className={styles.btn} onClick={handleGoBack}>
          <img src={back} alt="back" />
        </button>
      ) : (
        <Breadcrumb />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

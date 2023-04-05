import { Link } from "react-router-dom";
import { plus } from "../../assets";
import { ROUTE } from "../../router";
import styles from "./styles.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { useEffect, useState } from "react";

interface BannerProps {
  isBreadcrumbHidden: boolean;
}

export const Banner: React.FC<BannerProps> = ({ isBreadcrumbHidden }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`${styles.banner} ${
        isBreadcrumbHidden ? styles["banner-shifted"] : ""
      }`}
    >
      <Wrapper>
        {isMobile ? (
          <div className={styles.wrapBanner}>
            <Wrapper>
              <div className={styles.wrapBan}>
                <h1 className={styles.title}>
                  Бытовая химия, косметика <br /> и хозтовары
                </h1>
                <h3 className={styles.subTitle}>
                  оптом по кокчетаву и области
                </h3>
              </div>
              <div className={styles.wrapperBtn}>
                <div className={styles.wrapperMini}>
                  <button className={styles.btnMini}>
                    <img src={plus} alt="plus" className={styles.plus} />
                  </button>
                  <p>
                    Только самые выгодные предложения
                  </p>
                </div>
                <div className={styles.wrapperMini}>
                  <button className={styles.btnMini}>
                    <img src={plus} alt="plus" className={styles.plus} />
                  </button>
                  <p>
                    Бесплатная доставка по <strong>Кокчетаву от 10 тыс ₸</strong>
                  </p>
                </div>
              </div>
            </Wrapper>
          </div>
        ) : (
          <div className={styles.wrapBanner}>
            <div className={styles.wrapBan}>
              <h1 className={styles.title}>
                Бытовая химия, <br /> косметика <br /> и хозтовары
              </h1>
              <h3 className={styles.subTitle}>оптом по кокчетаву и области</h3>
              <Link className={styles.linksHeader} to={ROUTE.CATALOG}>
                <button className={styles.btn}>В КАТАЛОГ</button>
              </Link>
              <div className={styles.wrapperBtn}>
                <button className={styles.btnMini}>
                  <img src={plus} alt="plus" className={styles.plus} />
                </button>
                <p>
                  Только самые <br /> выгодные предложения
                </p>
                <button className={styles.btnMini}>
                  <img src={plus} alt="plus" className={styles.plus} />
                </button>
                <p>
                  Бесплатная доставка <br /> по Кокчетаву от 10 тыс ₸
                </p>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </section>
  );
};

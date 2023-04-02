import { Link } from "react-router-dom";
import { plus } from "../../assets";
import { ROUTE } from "../../router";
import styles from "./styles.module.scss";
import Wrapper from "../Wrapper/Wrapper";

interface BannerProps {
  isBreadcrumbHidden: boolean;
} 

export const Banner: React.FC<BannerProps> = ({isBreadcrumbHidden}) => {
  return (
    <section
      className={`${styles.banner} ${
        isBreadcrumbHidden ? styles["banner-shifted"] : ''
      }`}
    >
      <Wrapper>
        <div className={styles.wrapBanner}>
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
      </Wrapper>
    </section>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  basket,
  basketCount,
  burger,
  catalogBtn,
  download,
  emailIcon,
  girl,
  locationIcon,
  sultan,
} from "../../assets";
import { ROUTE, routes } from "./../../router/routes";
import Wrapper from "../Wrapper/Wrapper";

import styles from "./styles.module.scss";
import { useWindowSise } from "../../hooks/useWindowSize";

export const Header = () => {
  const [value, setValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
  };
  const { width } = useWindowSise();

  return (
    <>
      {width && width <= 768 ? (
          <div className={styles.mobile}>
            <div className={styles.up}>
              <img src={burger} alt="burger" className={styles.burger} />
              <img
                src={sultan}
                alt="sultan"
                width={"156px"}
                height={"66px"}
                className={styles.sultan}
              />
              <div className={styles.shopping}>
                <Link to={ROUTE.BASKET} className={styles.baskLink}>
                  <img src={basket} alt="basket" className={styles.basket} />
                </Link>
                <img
                  src={basketCount}
                  alt="basketCount"
                  className={styles.basketCount}
                />
              </div>
            </div>
            <div className={styles.down}>
              <Link className={styles.linksHeader} to={ROUTE.CATALOG}>
                <div className={styles.catalogMob}>Каталог</div>
              </Link>
              <div className={styles.separator}></div>
              <div className={styles.searchMob}>Поиск</div>
            </div>
          </div>
      ) : (
        <>
          <div className={styles.wrapperUp}>
            <Wrapper className={styles.wrapperUpWrapper}>
              <div className={styles.wrapperLeft}>
                <img src={locationIcon} alt="location" />
                <div className={styles.adress}>
                  г. Кокчетав, ул. Ж. Ташенова 129Б <br />
                  <span className={styles.adressSpan}>(Рынок Восточный)</span>
                </div>
                <img src={emailIcon} alt="email" className={styles.email} />
                <div className={styles.mail}>
                  opt.sultan@mail.ru <br />
                  <span className={styles.adressSpan}>
                    На связи в любое время
                  </span>
                </div>
              </div>
              <div className={styles.wrapperRight}>
                <ul className={styles.wrapperLinks}>
                  {routes.map(({ to, text }) => (
                    <li className={styles.wrapperLink} key={text}>
                      <Link to={to} className={styles.linksHeader}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Wrapper>
          </div>
          <Wrapper>
            <div className={styles.wrapperDown}>
              <img src={sultan} alt="sultan" width={"156px"} height={"66px"} />
              <div className={styles.wrapperBtn}>
                <Link className={styles.linksHeader} to={ROUTE.CATALOG}>
                  <button className={styles.btn}>
                    Каталог
                    <img
                      src={catalogBtn}
                      alt="catalog-btn"
                      style={{ padding: "0 10px" }}
                    />
                  </button>
                </Link>
                <select
                  className={styles.search}
                  value={value}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Поиск...
                  </option>
                </select>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.wrapperContact}>
                  <div className={styles.number}>+7 (777) 490-00-91</div>
                  <div className={styles.time}>время работы: 9:00-20:00</div>
                  <div className={styles.text}>Заказать звонок</div>
                </div>
                <img src={girl} alt="girl" />
              </div>
              <div className={styles.separator}></div>
              <button className={styles.btn}>
                Прайс-лист
                <img
                  src={download}
                  alt="download"
                  style={{ padding: "0 10px" }}
                />
              </button>
              <div className={styles.separator}></div>
              <div className={styles.shopping}>
                <Link to={ROUTE.BASKET} className={styles.baskLink}>
                  <img src={basket} alt="basket" className={styles.basket} />
                </Link>
                <img
                  src={basketCount}
                  alt="basketCount"
                  className={styles.basketCount}
                />
              </div>
              <div className={styles.shoppingWrap}>
                <div className={styles.shoppingCart}>Корзина</div>
                <div className={styles.price}>12 478 ₸</div>
              </div>
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

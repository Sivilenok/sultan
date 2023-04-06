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
  phone,
  sultan,
  telephone,
} from "../../assets";
import { ROUTE, routes } from "./../../router/routes";
import Wrapper from "../Wrapper/Wrapper";

import styles from "./styles.module.scss";

export const Header = () => {
  const [value, setValue] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className={styles.mobile}>
            <div className={styles.up}>
              <img
                src={burger}
                alt="burger"
                className={styles.burger}
                onClick={handleMenuToggle}
              />
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

            {isMenuOpen && (
              <div className={styles.menu}>
                <Wrapper className={styles.wrapperUpWrapper}>
                  <div className={styles.wrapperMenu}>
                    <div className={styles.wrapperText}>
                      <img src={locationIcon} alt="location" />
                      <div className={styles.adress}>
                        г. Кокчетав, ул. Ж. Ташенова 129Б <br />
                        <span className={styles.adressSpan}>
                          (Рынок Восточный)
                        </span>
                      </div>
                    </div>
                    <div className={styles.wrapperText}>
                      <img
                        src={emailIcon}
                        alt="email"
                        className={styles.email}
                      />
                      <div className={styles.mail}>
                        opt.sultan@mail.ru <br />
                        <span className={styles.adressSpan}>
                          На связи в любое время
                        </span>
                      </div>
                    </div>
                    <div className={styles.wrapperText}>
                      <img src={phone} alt="phone" className={styles.phone} />
                      <div className={styles.textList}>
                        <div className={styles.number}>+7 (777) 490-00-91</div>
                        <div className={styles.time}>
                          время работы: 9:00-20:00
                        </div>
                      </div>
                    </div>
                    <div className={styles.wrapperText}>
                      <img
                        src={telephone}
                        alt="telephone"
                        className={styles.telephone}
                      />
                      <div className={styles.text}>Заказать звонок</div>
                    </div>
                    <div className={styles.wrapperRight}>
                      <div className={styles.title}>Меню сайта: </div>
                      <ul className={styles.wrapperLinks}>
                        {routes.map(({ to, text }) => (
                          <li className={styles.wrapperLink} key={text}>
                            <Link to={to} className={styles.linksHeader}>
                              {text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <button className={styles.btn}>
                        Прайс-лист
                        <img
                          src={download}
                          alt="download"
                          style={{ padding: "0 10px" }}
                        />
                      </button>
                    </div>
                  </div>
                </Wrapper>
              </div>
            )}
          </div>
        </>
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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  download,
  masterCard,
  sultanFooter,
  telegram,
  visa,
  whatsApp,
} from "../../assets";
import { categories, routes } from "../../router";
import styles from "./styles.module.scss";
import Wrapper from "../Wrapper/Wrapper";

export const Footer = () => {
  const [value, setValue] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
        <div className={styles.footer}>
          <Wrapper>
            <div className={styles.wrapper}>
              <img
                src={sultanFooter}
                alt="sultan"
                className={styles.sultanFooter}
              />
              <button className={styles.btn}>
                Прайс-лист
                <img src={download} alt="download" />
              </button>
            </div>
            <p className={styles.text}>
              Компания «Султан» — снабжаем розничные <br />
              магазины товарами "под ключ" в Кокчетаве <br />и Акмолинской
              области
            </p>
            <p className={styles.subtext}>Подпишись на скидки и акции</p>
            <select
              className={styles.input}
              value={value}
              onChange={handleChange}
            >
              <option value="" disabled>
                Введите ваш E-mail
              </option>
            </select>
            <div className={styles.itemWrap}>
              <div className={styles.item}>
                <div className={styles.title}>Меню сайта:</div>
                <ul className={styles.linksFooter}>
                  {routes.map(({ to, text }) => (
                    <li className={styles.wrapperLink} key={text}>
                      <Link to={to} className={styles.links}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.item}>
                <div className={styles.title}>Категории:</div>
                <ul className={styles.linksFooter}>
                  {categories.map(({ to, text }) => (
                    <li className={styles.wrapperLink} key={text}>
                      <Link to={to} className={styles.links}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Контакты:</div>
              <div className={styles.textWrap}>
                <div className={styles.list}>
                  <p className={styles.number}>+7 (777) 490-00-91</p>
                  <p className={styles.hours}>время работы: 9:00-20:00</p>
                  <p
                    className={styles.contact}
                  >
                    Заказать звонок
                  </p>
                  <p className={styles.text}>
                   <strong> opt.sultan@mail.ru </strong><br />
                    <span className={styles.contact}>
                      На связи в любое время
                    </span>
                  </p>
                  <div className={styles.payments}>
                    <a href="https://www.visa.pl/" className={styles.social}>
                      <img src={visa} alt="visa" />
                    </a>
                    <a
                      href="https://www.mastercard.us/en-us.html"
                      className={styles.social}
                    >
                      <img src={masterCard} alt="masterCard" />
                    </a>
                  </div>
                </div>
                <div className={styles.list}>
                  <p className={styles.message}>Связь <br/>в мессенджерах:</p>
                  <div className={styles.variants}>
                  <a
                      href="https://web.whatsapp.com"
                      className={styles.social}
                    >
                      <img src={whatsApp} alt="whatsApp" />
                    </a>
                    <a
                      href="https://web.telegram.org"
                      className={styles.social}
                    >
                      <img src={telegram} alt="Telegram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      ) : (
        <div className={styles.footer}>
          <Wrapper>
            <div className={styles.wrapper}>
              <div className={styles.item}>
                <img
                  src={sultanFooter}
                  alt="sultan"
                  style={{ paddingBottom: "15px" }}
                />
                <p className={styles.text}>
                  Компания «Султан» — снабжаем <br /> розничные магазины
                  товарами <br />
                  "под ключ" в Кокчетаве и Акмолинской <br /> области
                </p>
                <p className={styles.subtext}>Подпишись на скидки и акции</p>
                <select
                  className={styles.input}
                  value={value}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Введите ваш E-mail
                  </option>
                </select>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Меню сайта:</div>
                <ul className={styles.linksFooter}>
                  {routes.map(({ to, text }) => (
                    <li className={styles.wrapperLink} key={text}>
                      <Link to={to} className={styles.links}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.itemWrap}>
                <div className={styles.item}>
                  <div className={styles.title}>Категории:</div>
                  <ul className={styles.linksFooter}>
                    {categories.map(({ to, text }) => (
                      <li className={styles.wrapperLink} key={text}>
                        <Link to={to} className={styles.links}>
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>Скачать прайс-лист:</div>
                  <button className={styles.btn}>
                    Прайс-лист
                    <img
                      src={download}
                      alt="download"
                      style={{ padding: "0 10px" }}
                    />
                  </button>
                  <p>Связь в мессенджерах:</p>
                  <div className={styles.variants}>
                    <a
                      href="https://www.instagram.com"
                      className={styles.social}
                    >
                      <img src={telegram} alt="Telegram" />
                    </a>
                    <a
                      href="https://web.whatsapp.com"
                      className={styles.social}
                    >
                      <img src={whatsApp} alt="whatsApp" />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.title}>Контакты:</div>
                <p className={styles.text}>+7 (777) 490-00-91</p>
                <p className={styles.contact}>время работы: 9:00-20:00</p>
                <p
                  className={styles.contact}
                  style={{
                    textDecorationLine: "underline",
                    fontSize: "10px",
                    lineHeight: "15px",
                  }}
                >
                  Заказать звонок
                </p>
                <p className={styles.text}>
                  opt.sultan@mail.ru <br />
                  <span className={styles.contact}>На связи в любое время</span>
                </p>
                <div className={styles.payments}>
                  <a href="https://www.visa.pl/" className={styles.social}>
                    <img src={visa} alt="visa" />
                  </a>
                  <a
                    href="https://www.mastercard.us/en-us.html"
                    className={styles.social}
                  >
                    <img src={masterCard} alt="masterCard" />
                  </a>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      )}
    </>
  );
};

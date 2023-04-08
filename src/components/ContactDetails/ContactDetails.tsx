import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const ContactDetails = () => {
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
    <div className={styles.contactDetails}>
      <div className={styles.item}>
        <div className={styles.wrap}>
          <div className={styles.number}>1</div>
          <div className={styles.title}>Контактные данные</div>
        </div>
        <div className={styles.name}>Имя*</div>
        <select className={styles.search} value={value} onChange={handleChange}>
          <option value="" disabled>
            Введите ваше имя
          </option>
        </select>
        <div className={styles.name}>Телефон*</div>
        <select className={styles.search} value={value} onChange={handleChange}>
          <option value="" disabled>
            Введите ваш телефон
          </option>
        </select>
        <div className={styles.name}>E-mail*</div>
        <select className={styles.search} value={value} onChange={handleChange}>
          <option value="" disabled>
            Введите ваш E-mail
          </option>
        </select>
        <div className={styles.name}>Название организации</div>
        <select className={styles.search} value={value} onChange={handleChange}>
          <option value="" disabled>
            Введите название организации
          </option>
        </select>
      </div>
      <div className={styles.item}>
        <div className={styles.wrap}>
          <div className={styles.number}>2</div>
          <div className={styles.title}>адрес доставки</div>
        </div>
        <div className={styles.name}>Город</div>
        <select
          className={styles.searchTown}
          value={value}
          onChange={handleChange}
        >
          <option value="" disabled>
            Выберите ваш город
          </option>
        </select>
        <div className={styles.name}>Адрес</div>
        <select className={styles.search} value={value} onChange={handleChange}>
          <option value="" disabled>
            Введите адрес доставки
          </option>
        </select>
      </div>
      {isMobile && (
        <>
          <div className={styles.wrapper}>
            <div className={styles.number}>3</div>
            <div className={styles.title}>Дополнительно</div>
          </div>
          <div className={styles.text}>Комментарий</div>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            className={styles.comments}
            placeholder="Введите ваш комментарий"
          ></textarea>
        </>
      )}
    </div>
  );
};

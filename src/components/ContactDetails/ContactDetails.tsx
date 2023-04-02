import { useState } from "react";
import styles from "./styles.module.scss";

export const ContactDetails = () => {
  const [value, setValue] = useState("");
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
  };
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
        <select className={styles.searchTown} value={value} onChange={handleChange}>
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
      <button className={styles.btn}>Подтверждение заказа</button>
    </div>
  );
};

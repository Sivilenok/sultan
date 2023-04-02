import { delivery, payment, question } from "../../assets";
import styles from "./styles.module.scss";

export const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <div className={styles.wrap}>
          <div className={styles.picture}>
            <img src={payment} alt="payment" className={styles.pic} />
          </div>
          <div className={styles.title}>Оплата</div>
        </div>
        <div className={styles.subtitle}>
          Принимаем оплату наличными, по карте и через расчетный счет.
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrap}>
          <div className={styles.picture}>
            <img src={delivery} alt="delivery" className={styles.pic} />
          </div>
          <div className={styles.title}>Доставка</div>
        </div>
        <div className={styles.subtitle}>
          Бесплатная доставка от <strong>10 000 ₸</strong> по области. Наша
          доставка работает ежедневно.
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.wrap}>
          <div className={styles.picture}>
            <img src={question} alt="question" className={styles.pic} />
          </div>
          <div className={styles.title}>возникли вопросы?</div>
        </div>
        <div className={styles.subtitle}>
          Звоните: <strong>+7 777 490 00 91</strong>Менеджер Вам ответит на все
          вопросы.
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.number}>1</div>
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
    </div>
  );
};

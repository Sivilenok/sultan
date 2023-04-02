import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

interface IProps {
  text: "Уход за телом";
  onClick: () => void;
}

export const FilterUp = ({ text, onClick }: IProps) => {
  return (
    <div className={styles.departuresUp}>
        <button className={styles.filter} onClick={onClick}>
          {text}
        </button>
        <button className={styles.filter} onClick={onClick}>
          Уход за руками
        </button>
        <button className={styles.filter} onClick={onClick}>
          Уход за ногами
        </button>
        <button className={styles.filter} onClick={onClick}>
          Уход за лицом
        </button>
        <button className={styles.filter} onClick={onClick}>
          Уход за волосами
        </button>
        <button className={styles.filter} onClick={onClick}>
          Уход за волосами
        </button>
        <button className={styles.filter} onClick={onClick}>
          Средства для загара
        </button>
        <button className={styles.filter} onClick={onClick}>
          Средства для бритья
        </button>
        <button className={styles.filter} onClick={onClick}>
          Подарочные наборы
        </button>
        <button className={styles.filter} onClick={onClick}>
          Гигиеническая продукция
        </button>
    </div>
  );
};

import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

export const FilterDepartures = () => {
  return (
    <div className={styles.departures}>
      <Wrapper>
        <h1 className={styles.title}>Уход за телом</h1>
        <div className={styles.item}>Уход за телом</div>
        <div className={styles.item}>Уход за руками</div>
        <div className={styles.item}>Уход за ногами</div>
        <div className={styles.item}>Уход за лицом</div>
        <div className={styles.item}>Уход за волосами</div>
        <div className={styles.item}>Уход за волосами</div>
        <div className={styles.item}>Средства для загара</div>
        <div className={styles.item}>Средства для бритья</div>
        <div className={styles.item}>Подарочные наборы</div>
        <div className={styles.item}>Гигиеническая продукция</div>
      </Wrapper>
    </div>
  );
};

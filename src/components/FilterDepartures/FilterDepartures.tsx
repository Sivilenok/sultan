import { useEffect, useState } from "react";
import { Sort } from "../Sort/Sort";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

export const FilterDepartures = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Wrapper>


      <div className={styles.departures}>
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
        {isMobile && (
          <Sort />
        )}
      </div>
    </Wrapper>
  );
};
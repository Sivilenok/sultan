import { useState } from "react";
import {
  air,
  camay,
  colgate,
  cottonClub,
  johnsons,
  masterFresh,
  nc,
  nefis,
  nivea,
  sibiar,
} from "../../assets";
import styles from "./styles.module.scss";
import Wrapper from "../Wrapper/Wrapper";

export const BestGoods = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const dots = [0, 1, 2];
  return (
    <div className={styles.bestGoods}>
      <Wrapper>
        <h1 className={styles.title}>
          <span style={{ color: "#FFC85E", fontWeight: "bold" }}>Лучшие</span>
          &nbsp;
          <span style={{ color: "#111111" }}>товары</span>
        </h1>
        <h4 className={styles.subtitle}>От ведущих мировых брендов</h4>
        <div className={styles.wrapper}>
          <img src={air} alt="air" className={styles.picture} />
          <img src={masterFresh} alt="masterFresh" className={styles.picture} />
          <img src={sibiar} alt="sibiar" className={styles.picture} />
          <img src={cottonClub} alt="cottonClub" className={styles.picture} />
          <img src={camay} alt="camay" className={styles.picture} />
          <img src={johnsons} alt="johnsons" className={styles.picture} />
          <img src={colgate} alt="colgate" className={styles.picture} />
          <img src={nivea} alt="nivea" className={styles.picture} />
          <img src={nc} alt="nc" className={styles.picture} />
          <img src={nefis} alt="nefis" className={styles.picture} />
        </div>
        <div className={styles.dotsContainer}>
          {dots.map((index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.active : ""
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

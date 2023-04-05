import { useState } from "react";
import { housewife, LeftIcon, RightIcon } from "../../assets";
import styles from "./styles.module.scss";
import Wrapper from "../Wrapper/Wrapper";

export const Sale = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      handleSlideChange(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < dots.length - 1) {
      setCurrentSlide(currentSlide + 1);
      handleSlideChange(currentSlide + 1);
    }
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const dots = [0, 1, 2];

  return (
    <div className={styles.sale}>
      <Wrapper>
        <div className={styles.wrapper}>
          <LeftIcon
            className={styles.leftIcon}
            onClick={() => {
              handlePrevSlide();
              handleSlideChange((currentSlide - 1 + dots.length) % dots.length);
            }}
          />
          <div className={styles.wrapperLeft}>
            <p className={styles.subtitle}>*Акция действует до 04/09/22</p>
            <h1 className={styles.title}><strong>Название</strong> Акции</h1>
            <div className={styles.descr}>
              Условия акции в пару строк, Условия акции <br />в пару строк,
              Условия акции в пару строк
            </div>
            <button className={styles.btn}>ПРИНЯТЬ УЧАСТИЕ</button>
          </div>
          <img src={housewife} alt="housewife" className={styles.picture} />
          <RightIcon
            className={styles.rightIcon}
            onClick={() => {
              handleNextSlide();
              handleSlideChange((currentSlide + 1) % dots.length);
            }}
          />
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

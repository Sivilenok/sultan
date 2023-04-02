import { useState } from "react";
import {
  basketProduct,
  bioMio,
  down,
  downloadDark,
  share,
  up,
} from "../../assets";
import styles from "./styles.module.scss";
import Wrapper from "../../components/Wrapper/Wrapper";

export const ProductDetailsPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");
  const [showSpecification, setSpecification] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
    setArrowDirection(arrowDirection === "down" ? "up" : "down");
  };

  const toggleSpecifications = () => {
    setSpecification(!showSpecification);
    setArrowDirection(arrowDirection === "down" ? "up" : "down");
  };

  return (
    <Wrapper>
      <div className={styles.productCard}>
        <img src={bioMio} alt="card" className={styles.picture} />
        <div className={styles.productDetails}>
          <div className={styles.inStock}>В наличии</div>
          <div className={styles.title}>
            BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот
          </div>
          <div className={styles.size}>90 г</div>
          <div className={styles.wrapperUp}>
            <div className={styles.price}>48,76 ₸</div>
            <div className={styles.count}>
              <button className={styles.counter}>-</button>
              <div className={styles.quantity}>1</div>
              <button className={styles.counter}>+</button>
            </div>
            <button className={styles.btn}>
              В КОРЗИНУ
              <img
                src={basketProduct}
                alt="basket-product"
                style={{ paddingLeft: "5px" }}
              />
            </button>
          </div>
          <div className={styles.wrapperDown}>
            <button className={styles.share}>
              <img src={share} alt="share" style={{ paddingLeft: "5px" }} />
            </button>
            <div className={styles.info}>
              При покупке от <strong>10 000 ₸</strong> бесплатная <br />
              доставка по Кокчетаву и области
            </div>
            <button className={styles.priceList}>
              Прайс-лист
              <img
                src={downloadDark}
                alt="downloadDark"
                style={{ padding: "0 10px" }}
              />
            </button>
          </div>
          <div className={styles.desc}>
            <ul>
              <li className={styles.item}>
                Производитель:
                <span className={styles.span}>BioMio</span>
              </li>
              <li className={styles.item}>
                Бренд:
                <span className={styles.span}>BioMio</span>
              </li>
              <li className={styles.item}>
                Артикул:
                <span className={styles.span}>460404</span>
              </li>
              <li className={styles.item}>
                Штрихкод:
                <span className={styles.span}>4604049097548</span>
              </li>
              <li className={styles.item}>
                Тип ухода:
                <span className={styles.span}>Уход за руками</span>
              </li>
            </ul>
            <div className={styles.details} onClick={toggleShowDetails}>
              Описание
              <img
                src={showDetails ? up : down}
                alt="arrow"
                className={styles.arrow}
              />
            </div>
            <div
              className={styles.specText}
              style={{ display: showDetails ? "block" : "none" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis. Faucibus
              consectetur aliquet sed pellentesque consequat consectetur congue
              mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
              malesuada.
            </div>
            <div className={styles.separatorTwo}></div>
            <div className={styles.details} onClick={toggleSpecifications}>
              Характеристики
              <img
                src={showSpecification ? up : down}
                alt="arrow"
                className={styles.arrowSpec}
              />
            </div>
            <ul style={{ display: showSpecification ? "block" : "none" }}>
              <li className={styles.item}>
                Кол-во в коробке:
                <span className={styles.span}>2</span>
              </li>
              <li className={styles.item}>
                Размеры коробки(Д*Ш*В):
                <span className={styles.span}>10х10х10</span>
              </li>
              <li className={styles.item}>
                Вес коробки:
                <span className={styles.span}>1020 г</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

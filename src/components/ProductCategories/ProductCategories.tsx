import {
  cosmeticsHygiene,
  householdChemicals,
  householdGoods,
  productsChildrenMothers,
  tableware,
} from "../../assets";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

export const ProductCategories = () => {
  return (
    <div className={styles.productCategories}>
      <Wrapper>
        <h1 className={styles.title}>
          <span style={{ color: "#FFC85E", fontWeight: "bold" }}>
            категории
          </span>
          &nbsp;
          <span style={{ color: "#111111" }}>товаров</span>
        </h1>
        <h4 className={styles.subtitle}>
          10 000+ ходовых позиций по специальным ценам
        </h4>
        <div className={styles.categories}>
          <div className={styles.item}>
            <div className={styles.picture}>
              <img
                src={householdChemicals}
                alt="householdChemicals"
                className={styles.pic}
              />
            </div>
            <div className={styles.item}>Бытовая химия</div>
          </div>
          <div className={styles.item}>
            <div className={styles.picture}>
              <img
                src={cosmeticsHygiene}
                alt="cosmeticsHygiene"
                className={styles.pic}
              />
            </div>
            <div className={styles.item}>Косметика и гигиена</div>
          </div>
          <div className={styles.item}>
            <div className={styles.picture}>
              <img
                src={householdGoods}
                alt="householdGoods"
                className={styles.pic}
              />
            </div>
            <div className={styles.item}>Товары для дома</div>
          </div>
          <div className={styles.item}>
            <div className={styles.picture}>
              <img
                src={productsChildrenMothers}
                alt="productsChildrenMothers"
                className={styles.pic}
              />
            </div>
            <div className={styles.item}>Товары для детей и мам</div>
          </div>
          <div className={styles.item}>
            <div className={styles.picture}>
              <img src={tableware} alt="tableware" className={styles.pic} />
            </div>
            <div className={styles.item}>Посуда</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

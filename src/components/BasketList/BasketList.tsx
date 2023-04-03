import { BasketProduct } from "../BasketProduct/BasketProduct";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

export const BasketList = () => {
  return (
    <div className={styles.basketlist}>
      <Wrapper>
        <BasketProduct
          image_url={""}
          name={""}
          size_type={""}
          size={""}
          price={0}
          description={""}
        />
      </Wrapper>
    </div>
  );
};

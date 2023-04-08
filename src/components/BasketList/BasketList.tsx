import { ariel } from "../../assets";
import { BasketProduct } from "../BasketProduct/BasketProduct";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

export const BasketList = () => {
  return (
    <div className={styles.basketlist}>
      <Wrapper>
        <BasketProduct
          image_url={ariel}
          name={"AOS"}
          size_type={"мл"}
          size={"450"}
          price={48.76}
          description={"средство для мытья посуды Crystal"}
        />
      </Wrapper>
    </div>
  );
};

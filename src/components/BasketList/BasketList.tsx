import products from "../../services/products.json";
import { BasketProduct } from "../BasketProduct/BasketProduct";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";
 
export const BasketList = () => {
  return (
    <div className={styles.basketlist}>
      {products.map((product) => (
        <Wrapper key={product.id}>
          <BasketProduct {...product} />
        </Wrapper>
      ))}
    </div>
  );
};

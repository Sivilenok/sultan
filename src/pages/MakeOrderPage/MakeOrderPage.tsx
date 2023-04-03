import { ContactDetails, Info, OrderList } from "../../components";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./styles.module.scss";

export const MakeOrderPage = () => {
  return (
    <div className={styles.makeOrder}>
      <Wrapper>
        <div className={styles.title}>Оформление заказа</div>
        <div className={styles.wrapper}>
          <ContactDetails />
          <Info />
          <OrderList products={[]} />
        </div>
      </Wrapper>
    </div>
  );
};

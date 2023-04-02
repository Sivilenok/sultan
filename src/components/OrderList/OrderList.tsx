import { pencil } from "../../assets";
import products from "../../services/products.json";
import { OrderItem } from "../OrderItem/OrderItem";
import styles from "./styles.module.scss";

export const OrderList = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Ваш заказ</div>
      <div className={styles.list}>
        {products.map((product) => (
          <OrderItem {...product} key={product.id} />
        ))}
      </div>
      <div className={styles.total}>ИТОГО</div>
      <button className={styles.btn}>
        Редактировать заказ
        <img src={pencil} alt="pencil" style={{ padding: "0 10px" }} />
      </button>
    </div>
  );
};
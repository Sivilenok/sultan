import { useEffect, useState } from "react";
import { pencil } from "../../assets";
import { Product } from "../../services/products";
import products from "../../services/products.json";
import { OrderItem } from "../OrderItem/OrderItem";
import styles from "./styles.module.scss";

interface Props {
  products: Product[];
}

export const OrderList = ({ products }: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className={styles.mobile}>
          <div className={styles.mob}>
            <div className={styles.price}>1 348,76 ₸</div>
            <img src={pencil} alt="pencil" className={styles.pencil}/>
          </div>
          <button className={styles.btn}>Подтверждение заказа</button>
        </div>
      ) : (
        <div className={styles.wrap}>
          <div className={styles.title}>Ваш заказ</div>
          <div className={styles.list}>
            {products.map((product) => (
              <OrderItem {...product} key={product.id} />
            ))}
          </div>
          <div className={styles.listTotal}>
            <div className={styles.total}>ИТОГО</div>
            <div className={styles.price}>1 348,76 ₸</div>
          </div>
          <button className={styles.btn}>
            Редактировать заказ
            <img src={pencil} alt="pencil" style={{ padding: "0 10px" }} />
          </button>
        </div>
      )}
    </>
  );
};

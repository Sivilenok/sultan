import { Link, generatePath } from "react-router-dom";
import styles from "./styles.module.scss";
import { ROUTE } from "../../router";

interface IProps {
  image_url: string;
  name: string;
  size_type: string;
  size: string;
  price: number;
  description: string;
}

export const OrderItem = ({
  image_url,
  name,
  description,
  size,
  size_type,
  price,
}: IProps) => {
  return (
    <div className={styles.order}>
        <img src={image_url} alt="image_url" className={styles.picture} />
        <div className={styles.wrapper}>
          <div className={styles.size}>
            {size}&nbsp;{size_type}
          </div>
          <div className={styles.name}>
            <Link
              className={styles.button}
              type="button"
              to={generatePath(ROUTE.PRODUCT_CARD)}
            >
              <span style={{ paddingRight: "5px", color: "#111111" }}>
                {name}
              </span>
              <span style={{ fontWeight: "500", color: "#111111" }}>
                {description}
              </span>
            </Link>
          </div>
          <div className={styles.price}>{price}</div>
        </div>
    </div>
  );
};

import { Link, generatePath } from "react-router-dom";
import styles from "./styles.module.scss";
import { ROUTE } from "../../router";
import { deleteBtn } from "../../assets";
import { useState } from "react";

interface IProps {
  image_url: string;
  name: string;
  size_type: string;
  size: string;
  price: number;
  description: string;
}

export const BasketProduct = ({
  image_url,
  name,
  description,
  size,
  size_type,
  price,
}: IProps) => {
  const [quantity, setQuantity] = useState(1);
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.basketProduct}>
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
            onClick={() => window.scrollTo(0, 0)}
          >
            <span style={{ paddingRight: "5px", color: "#111111" }}>
              {name}
            </span>
            <span style={{ fontWeight: "500", color: "#111111" }}>
              {description}
            </span>
          </Link>
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
          vulputate feugiat massa vestibulum duis.
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.wrap}>
        <div className={styles.count}>
          <button className={styles.counter} onClick={handleSubtractQuantity}>
            -
          </button>
          <div className={styles.quantity}>{quantity}</div>
          <button className={styles.counter} onClick={handleAddQuantity}>
            +
          </button>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.price}>{price}</div>
        <div className={styles.separator}></div>
        <img src={deleteBtn} alt="deleteBtn" className={styles.deleteBtn} />
      </div>
    </div>
  );
};

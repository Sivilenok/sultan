import { generatePath, Link } from "react-router-dom";
import { basketProduct } from "../../assets";
import { ROUTE } from "../../router";
import styles from "./styles.module.scss";

interface IProps {
  category: string;
  image_url: string;
  name: string;
  size_type: string;
  size: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  popular: boolean;
  className: string;
}

export const ProductItem = ({
  image_url,
  name,
  description,
  size,
  size_type,
  barcode,
  manufacturer,
  brand,
  price,
  popular,
}: IProps) => {
  return (
    <>
        <div className={styles.product}>
          {popular && <div className={styles.popular}>ПОПУЛЯРНОЕ</div>}
          <img src={image_url} alt="image_url" className={styles.picture} />
          <div className={styles.size}>
            {size}&nbsp;{size_type}
          </div>
          <div className={styles.name}>
            <Link className={styles.button} type="button" to={generatePath(ROUTE.PRODUCT_CARD)} onClick={() => window.scrollTo(0, 0)}>
              <span style={{ paddingRight: "5px", color: "#111111"}}>{name}</span>
              <span style={{ fontWeight: "500", color: "#111111"}}>{description}</span>
            </Link>
          </div>
          <div className={styles.desc}>
            <div className={styles.barcode}>
              Штрихкод:&nbsp;
              <span style={{ fontWeight: "500", color: "#111111" }}>
                {barcode}
              </span>
            </div>
            <div className={styles.manufacturer}>
              Производитель:&nbsp;
              <span style={{ fontWeight: "500", color: "#111111" }}>
                {manufacturer}
              </span>
            </div>
            <div className={styles.brand}>
              Бренд:&nbsp;
              <span style={{ fontWeight: "500", color: "#111111" }}>
                {brand}
              </span>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.price}>{price}</div>
            <button className={styles.btn}>
              В КОРЗИНУ
              <img src={basketProduct} alt="basket-product" style={{ paddingLeft: "5px" }}/>
            </button>
          </div>
        </div>
    </>
  );
};

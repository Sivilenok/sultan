import { selectAllProducts, useAppSelector } from "../../store";
import { Product, Products } from "../../services/products";
import { ProductItem } from "../ProductItem/ProductItem";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

interface IProps {
  products: Products["all"];
  className?: string;
}

export const ProductList = ({ className, products }: IProps) => {
  const popularProducts = useAppSelector(selectAllProducts);

  return (
    <div className={`${styles.productslist} ${styles.list} ${className}`}>
      {Array.isArray(products) &&
        products.map((product: Product) => (
          <Wrapper key={product.id}>
            <ProductItem
              isPopular={false}
              className={styles.list}
              {...product}
            />
          </Wrapper>
        ))}
    </div>
  );
};

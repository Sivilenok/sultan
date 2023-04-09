import { selectAllProducts, useAppSelector, selectPopularProducts } from "../../store";
import { Product, Products } from "../../services/products";
import { ProductItem } from "../ProductItem/ProductItem";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";

interface IProps {
  products: Products["all"];
  className?: string;
}

export const ProductList = ({ className, products }: IProps) => {
//  const products = useAppSelector(selectPopularProducts);
//  const dispatch = useDispatch();

console.log(products)

  return (
    <div className={`${styles.productslist} ${styles.list} ${className}`}>
        {products.map((product: Product) => (
          <Wrapper key={product.id}>
            <ProductItem
              className={styles.list}
              {...product}
            />
          </Wrapper>
        ))}
    </div>
  );
};

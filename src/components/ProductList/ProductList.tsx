import {
  selectAllProducts,
  selectPopularProducts,
  useAppSelector,
} from "../../store";
import { Product, Products } from "../../services/products";
import { ProductItem } from "../ProductItem/ProductItem";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";

interface IProps {
  products: Products["all"];
  className?: string;
  allProducts?: boolean;
  popularProducts?: boolean;
}

export const ProductList = ({
  products,
  className,
  allProducts = false,
  popularProducts = false,
}: IProps) => {
  const allProductsSelector = useAppSelector(selectAllProducts);
  const popularProductsSelector = useAppSelector(selectPopularProducts);
  const filteredProducts = allProducts
    ? allProductsSelector
    : popularProducts
    ? popularProductsSelector
    : products;

  return (
    <div className={`${styles.productslist} ${className}`}>
      {filteredProducts.map((product: Product) => (
        <Wrapper key={product.id}>
          <ProductItem className={styles.list} {...product} />
        </Wrapper>
      ))}
    </div>
  );
};

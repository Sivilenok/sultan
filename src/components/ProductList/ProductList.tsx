import { useAppSelector } from '../../store';
import { Product } from '../../services/products';
import { ProductItem } from '../ProductItem/ProductItem';
import Wrapper from '../Wrapper/Wrapper';
import styles from './styles.module.scss';

interface IProps {
  products: Product[];
  className?: string;
}

export const ProductList = ({ className }: IProps) => {
  const popularProducts = useAppSelector((state) => state.products.popular);

  return (
    <div className={`${styles.productslist} ${styles.list} ${className}`}>
      {popularProducts.map((product: Product) => (
        <Wrapper key={product.id}>
          <ProductItem className={styles.list} {...product} />
        </Wrapper>
      ))}
    </div>
  );
};

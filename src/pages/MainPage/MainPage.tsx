import { useDispatch } from "react-redux";
import {
  Banner,
  BestGoods,
  Contacts,
  ProductCategories,
  ProductList,
  Sale,
} from "../../components";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useAppSelector, selectPopularProducts } from "../../store";
import styles from "./styles.module.scss";


export const MainPage = () => {  
  const productsPopular = useAppSelector(selectPopularProducts);

  return (
    <main className={styles.main}>
      <Banner isBreadcrumbHidden={true} />
      <Wrapper>
        <h1 className={styles.title}>
          <span style={{ color: "#FFC85E", fontWeight: "bold" }}>
            Акционные
          </span>
          &nbsp;
          <span style={{ color: "#111111" }}>товары</span>
        </h1>
        <ProductList products={productsPopular} className={styles.сlassName} />
        <ProductCategories />
        <Sale />
        <BestGoods />
        <Contacts />
      </Wrapper>
    </main>
  );
};

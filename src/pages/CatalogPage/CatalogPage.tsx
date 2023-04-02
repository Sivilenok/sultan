import { useCallback, useState } from "react";
import { down, up } from "../../assets";
import {
  FilterDepartures,
  FilterDown,
  FilterUp,
  Pagination,
  ProductList,
} from "../../components";
import { useAppSelector } from "../../store";

import styles from "./styles.module.scss";
import Wrapper from "../../components/Wrapper/Wrapper";

export const CatalogPage = () => {
  const products = useAppSelector((state) => state.products.all);
  const [showShowSort, setShowSort] = useState<boolean>(true);

  const [orderAsc, setOrderAsc] = useState<boolean>(true);
  const [orderField, setOrderField] = useState<"name" | "price">("name");

  const [currentPage, setCurrentPage] = useState<number>(1);

  const setOrderHandler = useCallback(
    (field: "name" | "price", order: boolean) => {
      setOrderField(field);
      setOrderAsc(order);
      setShowSort(false);
    },
    []
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    console.log("Кнопка нажата");
  };
  

  return (
    <div className={styles.catalog}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.title}>Косметика и гигиена</div>
          <div className={styles.sort}>
            <div className={styles.text}>Сортировка:</div>
            <div className={styles.sorting}>
              <div
                className={styles.name}
                onClick={() => setOrderHandler("name", true)}
              >
                Название (возр.)
                <img
                  src={showShowSort ? up : down}
                  alt="arrow"
                  className={styles.arrow}
                />
              </div>
              <div
                className={styles.sortList}
                style={{ display: showShowSort ? "block" : "none" }}
                onClick={() => setOrderHandler("name", false)}
              >
                Название (убв.)
              </div>
              <div
                className={styles.sortList}
                style={{ display: showShowSort ? "block" : "none" }}
                onClick={() => setOrderHandler("price", false)}
              >
                Цена (возр.)
              </div>
              <div
                className={styles.sortList}
                style={{ display: showShowSort ? "block" : "none" }}
                onClick={() => setOrderHandler("price", true)}
              >
                Цена (убв.)
              </div>
            </div>
          </div>
        </div>
        <FilterUp onClick={handleClick} text={"Уход за телом"} />
        <div className={styles.wrap}>
          <div className={styles.wrapFilters}>
            <FilterDown />
            <FilterDepartures />
          </div>
          <ProductList products={products} className={styles.list} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
        />
      </Wrapper>
    </div>
  );
};

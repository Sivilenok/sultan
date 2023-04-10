import { useEffect, useState } from "react";
import {
  FilterDown,
  Pagination,
  ProductList,
  Sort,
} from "../../components";
import { useAppSelector, selectAllProducts } from "../../store";

import styles from "./styles.module.scss";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Filter } from "../../components/Filter/Filter";

export const CatalogPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDepartures, setShowDepartures] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const products = useAppSelector(selectAllProducts);

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    console.log("Кнопка нажата");
  };

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
          <div className={styles.title}>Косметика и гигиена</div>
          <FilterDown onClick={() => setShowDepartures(!showDepartures)} />
          <ProductList products={products} className={styles.list} />
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={handlePageChange}
          />
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
            vulputate feugiat massa vestibulum duis. Faucibus consectetur
            aliquet sed pellentesque consequat consectetur congue mauris
            venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
            malesuada.
          </div>
        </div>
      ) : (
        <Wrapper>
          <div className={styles.wrapper}>
            <div className={styles.title}>Косметика и гигиена</div>
            <Sort />
          </div>
          <Filter
            selectedFilter={selectedFilter}
            onFilterSelect={handleFilterSelect}
            onClick={handleClick}
          />
          <div className={styles.wrap}>
            <div className={styles.wrapFilters}>
              <FilterDown onClick={() => setShowDepartures(!showDepartures)} />
              <Filter
                onFilterSelect={handleFilterSelect}
                selectedFilter={selectedFilter}
                onClick={handleClick}
                className={styles.filterLeft}
              />
            </div>
            <ProductList products={products} className={styles.list} />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={handlePageChange}
          />
        </Wrapper>
      )}
    </>
  );
};

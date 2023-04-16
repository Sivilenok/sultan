import { useEffect, useState } from "react";
import { FilterDown, Pagination, ProductList, Sort } from "../../components";
import { useAppSelector, selectAllProducts } from "../../store";
import styles from "./styles.module.scss";
import Wrapper from "../../components/Wrapper/Wrapper";
import { FilterUp } from "../../components/FilterUp/FilterUp";
import { FilterLeft } from "../../components/FilterLeft/FilterLeft";

export const CatalogPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDepartures, setShowDepartures] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const products = useAppSelector(selectAllProducts);
  const productsPerPage = 15;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredProducts = selectedFilter
  ? products.filter((product) => product.category === selectedFilter)
  : products;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filters = [
    "Уход за телом",
    "Уход за руками",
    "Уход за ногами",
    "Уход за лицом",
    "Уход за волосами",
    "Средства для загара",
    "Средства для бритья",
    "Подарочные наборы",
    "Гигиеническая продукция",
    "Гигиена полости рта",
    "Бумажная продукция",
  ];

  return (
    <>
      {isMobile ? (
        <div className={styles.mobile}>
          <div className={styles.title}>Косметика и гигиена</div>
          <FilterDown onClick={() => setShowDepartures(!showDepartures)} />
          <ProductList
            products={products.slice(startIndex, endIndex)}
            className={styles.list}
          />
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
            <Sort/>
          </div>
          <FilterUp
            filters={filters}
            selectedFilter={selectedFilter}
            onFilterClick={handleFilterClick}
          />
          <div className={styles.wrap}>
            <div className={styles.wrapFilters}>
              <FilterDown onClick={() => setShowDepartures(!showDepartures)} />
              <FilterLeft
                filters={filters}
                selectedFilter={selectedFilter}
                onFilterClick={handleFilterClick}
              />
            </div>
            {filteredProducts.length ? (
              <ProductList
                products={filteredProducts.slice(startIndex, endIndex)}
              />
            ) : (
              <div className={styles.message}>Нет в наличии на складе</div>
            )}
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

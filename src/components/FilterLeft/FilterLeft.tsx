import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Sort } from "../Sort/Sort";

interface Props {
  filters: string[];
  selectedFilter: string;
  onFilterClick: (filter: string) => void;
}

export const FilterLeft = ({
  filters,
  selectedFilter,
  onFilterClick,
}: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.filterLeft}>
      <h1 className={styles.title}>Уход за телом</h1>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.btnLeft} ${
            selectedFilter === filter ? styles.active : ""
          }`}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
      {isMobile && <Sort />}
    </div>
  );
};

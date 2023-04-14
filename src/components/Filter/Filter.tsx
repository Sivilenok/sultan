import styles from "./styles.module.scss";

interface IProps {
  selectedFilter: string;
  onFilterSelect: (filter: string) => void;
  onClick: () => void;
  className?: string;
}

export const Filter = ({
  selectedFilter,
  onFilterSelect,
  className,
}: IProps) => {
  const handleFilterClick = (filter: string) => {
    onFilterSelect(filter);
  };

  return (
    <div className={`${styles.filterUp} ${className}`}>
      <button
  className={`${styles.btnUp} ${styles.btnLeft} ${selectedFilter === "Filter 1" ? styles.selectedFilter : ""}`}
  onClick={() => handleFilterClick("Filter 1")}
       
      >
        Уход за телом
      </button>
      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 2")}
        style={
          selectedFilter === "Filter 2" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Уход за руками
      </button>
      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 3")}
        style={
          selectedFilter === "Filter 3" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Уход за ногами
      </button>
      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 4")}
        style={
          selectedFilter === "Filter 4" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Уход за лицом
      </button>
      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 5")}
        style={
          selectedFilter === "Filter 5" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Уход за волосами
      </button>

      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 7")}
        style={
          selectedFilter === "Filter 7" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Средства для загара
      </button>
      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 8")}
        style={
          selectedFilter === "Filter 8" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Средства для бритья
      </button>
      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 9")}
        style={
          selectedFilter === "Filter 9" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Подарочные наборы
      </button>
      <button
        className={`${styles.btnUp} ${styles.btnLeft}`}
        onClick={() => handleFilterClick("Filter 10")}
        style={
          selectedFilter === "Filter 10" ? { backgroundColor: "#E2E2E2" } : {}
        }
      >
        Гигиеническая продукция
      </button>
    </div>
  );
};

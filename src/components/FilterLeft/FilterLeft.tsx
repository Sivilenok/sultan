import styles from "./styles.module.scss";

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
  return (
    <div className={styles.filterLeft}>
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
    </div>
  );
};

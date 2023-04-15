import styles from "./styles.module.scss";

interface Props {
  filters: string[];
  selectedFilter: string;
  onFilterClick: (filter: string) => void;
}

export const FilterUp = ({ filters, selectedFilter, onFilterClick }: Props) => {
  return (
    <div className={styles.filterUp}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.btnUp} ${
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

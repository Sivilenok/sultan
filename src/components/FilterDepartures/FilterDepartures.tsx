import { useEffect, useState } from "react";
import { Sort } from "../Sort/Sort";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./styles.module.scss";
import { Filter } from "../Filter/Filter";

interface IProps {
  onFilterSelect: (filter: string) => void;
  selectedFilter: string;
  onClick: () => void;
  className?: string;
}

export const FilterDepartures = ({
  onFilterSelect,
  selectedFilter,
  onClick,
  className,
}: IProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (filter: string) => {
    onFilterSelect(filter);
  };

  return (
    <Wrapper>
      <div className={styles.departures}>
        <h1 className={styles.title}>Уход за телом</h1>
        <Filter
          selectedFilter={selectedFilter}
          onFilterSelect={onFilterSelect}
          onClick={onClick}
          className={styles.filterLeft}/>
        {isMobile && <Sort />}
      </div>
    </Wrapper>
  );
};

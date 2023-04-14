import { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import { down, up } from "../../assets";

export const Sort = () => {
  const [orderAsc, setOrderAsc] = useState<boolean>(true);
  const [orderField, setOrderField] = useState<"name" | "price">("name");
  const [showSort, setShowSort] = useState<boolean>(true);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const [field, order] = value.split('-');
    setOrderField(field as "name" | "price");
    setOrderAsc(order === 'asc');
  }, []);

  return (
    <div className={styles.sort}>
      <div className={styles.text}>Сортировка:</div>
      <div className={styles.sorting}>
        <select className={styles.select} onChange={handleChange}>
          <option value="name-asc">Название (возр.)</option>
          <option value="name-desc">Название (убыв.)</option>
          <option value="price-asc">Цена (возр.)</option>
          <option value="price-desc">Цена (убыв.)</option>
        </select>
        <img
          src={showSort ? up : down}
          alt="arrow"
          className={styles.arrow}
          onClick={() => setShowSort((prevState) => !prevState)}
        />
      </div>
    </div>
  );
};

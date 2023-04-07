import { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import { down, up } from "../../assets";

export const Sort = () => {
  const [orderAsc, setOrderAsc] = useState<boolean>(true);
  const [orderField, setOrderField] = useState<"name" | "price">("name");
  const [showShowSort, setShowSort] = useState<boolean>(true);

  const setOrderHandler = useCallback(
    (field: "name" | "price", order: boolean) => {
      setOrderField(field);
      setOrderAsc(order);
      setShowSort(false);
    },
    []
  );
  return (
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
  );
};

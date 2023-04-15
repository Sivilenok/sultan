import { selectAllProducts, setAllProducts } from "../../store";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useState } from "react";

export const Sort = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSortChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);

    switch (selectedOption.value) {
      case "name-asc":
        const productsSortedByNameAsc = [...allProducts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        dispatch(setAllProducts(productsSortedByNameAsc));
        break;
      case "name-desc":
        const productsSortedByNameDesc = [...allProducts].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        dispatch(setAllProducts(productsSortedByNameDesc));
        break;
      case "price-asc":
        const productsSortedByPriceAsc = [...allProducts].sort(
          (a, b) => a.price - b.price
        );
        dispatch(setAllProducts(productsSortedByPriceAsc));
        break;
      case "price-desc":
        const productsSortedByPriceDesc = [...allProducts].sort(
          (a, b) => b.price - a.price
        );
        dispatch(setAllProducts(productsSortedByPriceDesc));
        break;
      default:
        break;
    }
  };

  const options = [
    { value: "name-asc", label: "Название (возр.)" },
    { value: "name-desc", label: "Название (убыв.)" },
    { value: "price-asc", label: "Цена (возр.)" },
    { value: "price-desc", label: "Цена (убыв.)" },
  ];

  return (
    <div className={styles.sort}>
      <div className={styles.text}>Сортировка:</div>
      <div className={styles.sorting}>
        <Select
          className={styles.select}
          value={selectedOption}
          onChange={handleSortChange}
          options={options}
          placeholder="Название"
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: "#fcfcfc",
              boxShadow: "none",
              "&:hover": {
                borderColor: "#fcfcfc",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#eee" : "#fff",
              "&:hover": {
                backgroundColor: "#ccc",
              },
            }),
            
          }}
        />
      </div>
    </div>
  );
};

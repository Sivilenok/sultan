import { useState } from "react";
import { deleteBtn, down, downArrow, up, upArrow } from "../../assets";
import styles from "./styles.module.scss";
import manufacturers from "../../services/products.json";
import Wrapper from "../Wrapper/Wrapper";
import { FilterLeft } from "../FilterLeft/FilterLeft";
import { Product } from "../../services/products";

interface IManufacturer {
  products: Product[];
  manufacturer: string;
  selected: boolean;
}

interface Props {
  onClick: () => void;
}

export const FilterDown = ({ onClick }: Props) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setValue(event.target.value);
  };
  const [showShowSort, setShowSort] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");
  const [manufacturerList, setManufacturerList] = useState<IManufacturer[]>(
    manufacturers.products.map((product: Product) => ({
      manufacturer: product.manufacturer,
      products: [product],
      selected: false,
    }))
  );

  const [selectedFilter, setSelectedFilter] = useState("");
  const filters = ["Уход за телом", "Уход за волосами", "Уход за лицом"];
  const [price, setPrice] = useState(0);

  const handleClick = (amount: number) => {
    if (amount === 0 && price === 0) {
      return;
    } else if (amount === 10000) {
      setPrice((prevPrice) => Math.min(prevPrice + 1000, 10000));
    } else {
      setPrice((prevPrice) => Math.max(prevPrice - 1000, 0));
    }
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const toggleShowSort = () => {
    setShowSort(!showShowSort);
    setArrowDirection(arrowDirection === "down" ? "up" : "down");

    setManufacturerList((prevList) => {
      const newList = [...prevList];

      if (!showShowSort) {
        newList.forEach((manufacturer) => {
          manufacturer.selected = false;
        });
      }

      return newList;
    });
  };

  const handleManufacturerChange = (index: number) => {
    setManufacturerList((prevList) => {
      const newList = [...prevList];
      newList[index].selected = !newList[index].selected;
      return newList;
    });
  };

  const selectedManufacturers = manufacturerList
    .filter((manufacturer) => manufacturer.selected)
    .map((manufacturer) => manufacturer.manufacturer);

  const dropdownManufacturers = manufacturers.products.filter(
    (manufacturer) => !selectedManufacturers.includes(manufacturer.manufacturer)
  );
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.selection}>
      <Wrapper>
        <div className={styles.wrapMob}>
          <div className={styles.titleMob}>ПОДБОР ПО ПАРАМЕТРАМ</div>
          <button className={styles.btnMob} onClick={toggleDropdown}>
            <img
              src={isOpen ? downArrow : upArrow}
              alt="upArrow"
              className={styles.upArrow}
            />
          </button>
        </div>
        {isOpen && (
          <FilterLeft
            filters={filters}
            selectedFilter={selectedFilter}
            onFilterClick={handleFilterClick}
          />
        )}
        <div className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</div>
        <div className={styles.subtitle}>{price} ₸</div>
        <div className={styles.count}>
          <button className={styles.counter} onClick={() => handleClick(0)}>
            0
          </button>
          <div className={styles.quantity}>-</div>
          <button className={styles.counter} onClick={() => handleClick(10000)}>
            10000
          </button>
        </div>

        <div className={styles.titleTwo}>Производитель</div>
        <select className={styles.search} value={value} onChange={handleChange}>
          <option value="" disabled>
            Поиск...
          </option>
          {dropdownManufacturers.map((manufacturer, index: number) => (
            <option key={index} value={manufacturer.manufacturer}>
              {manufacturer.manufacturer}
            </option>
          ))}
        </select>

        <div className={styles.manufacturers}>
          {manufacturerList
            .filter(
              (manufacturer) =>
                !selectedManufacturers.includes(manufacturer.manufacturer)
            )
            .slice(0, 4)
            .map((manufacturer, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={manufacturer.selected}
                  onChange={() => handleManufacturerChange(index)}
                />
                <span className={styles.manName}>
                  {manufacturer.manufacturer}
                </span>
              </div>
            ))}
        </div>

        <div className={styles.sort}>
          <div className={styles.text}>Показать все</div>

          <div className={styles.sorting}>
            <div className={styles.name} onClick={toggleShowSort}>
              <img
                src={showShowSort ? up : down}
                alt="arrow"
                className={styles.arrow}
              />
            </div>
            <div
              className={styles.sortList}
              style={{ display: showShowSort ? "block" : "none" }}
            >
              {manufacturerList
                .filter(
                  (manufacturer) =>
                    !selectedManufacturers.includes(manufacturer.manufacturer)
                )

                .map((manufacturer, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={manufacturer.selected}
                      onChange={() => handleManufacturerChange(index)}
                    />
                    <span className={styles.manName}>
                      {manufacturer.manufacturer}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.separator}></div>
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.btn}>Показать</button>
          <img src={deleteBtn} alt="deleteBtn" className={styles.deleteBtn} />
        </div>
      </Wrapper>
    </div>
  );
};

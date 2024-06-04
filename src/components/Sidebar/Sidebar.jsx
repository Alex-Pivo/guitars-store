import React from "react";
import styles from "../../styles/sideBar.module.scss";

const manufacturers = ["Усі", "Fender", "D'Angelico", "Les Paul", "Jackson"];
const guitarTypes = ["Усі", "electric", "acoustic", "bass"];
const fretCounts = ["Усі", "19", "20", "21", "22"];
const pickupTypes = ["Усі", "S", "S-S", "H", "H-H"];
const priceRanges = ["Усі", "0 - 10000", "10000 - 30000", "30000 - 50000", "50000 - 100000"];

const Sidebar = ({ filters, setFilters }) => {
  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>Фільтри</div>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.box}>
            <p className={styles.name}>Виробник</p>
            <select
              className={styles.select}
              name="manufacturer"
              onChange={(e) => handleFilterChange("manufacturer", e.target.value)}
              value={filters.manufacturer}
            >
              {manufacturers.map((manufacturer, index) => (
                <option key={index} value={manufacturer}>
                  {manufacturer}
                </option>
              ))}
            </select>
          </li>
          <li className={styles.box}>
            <p className={styles.name}>Тип гітари</p>
            <select
              className={styles.select}
              name="type"
              onChange={(e) => handleFilterChange("type", e.target.value)}
              value={filters.type}
            >
              {guitarTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </li>
          <li className={styles.box}>
            <p className={styles.name}>Кількість ладів</p>
            <select
              className={styles.select}
              name="fret"
              onChange={(e) => handleFilterChange("fret", e.target.value)}
              value={filters.fret}
            >
              {fretCounts.map((fretCount, index) => (
                <option key={index} value={fretCount}>
                  {fretCount}
                </option>
              ))}
            </select>
          </li>
          <li className={styles.box}>
            <p className={styles.name}>Тип звукоснімачів</p>
            <select
              className={styles.select}
              name="pickupType"
              onChange={(e) => handleFilterChange("pickupType", e.target.value)}
              value={filters.pickupType}
            >
              {pickupTypes.map((pickupType, index) => (
                <option key={index} value={pickupType}>
                  {pickupType}
                </option>
              ))}
            </select>
          </li>
          <li className={styles.box}>
            <p className={styles.name}>Ціна</p>
            <select
              className={styles.select}
              name="price"
              onChange={(e) => handleFilterChange("price", e.target.value)}
              value={filters.price}
            >
              {priceRanges.map((priceRange, index) => (
                <option key={index} value={priceRange}>
                  {priceRange}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

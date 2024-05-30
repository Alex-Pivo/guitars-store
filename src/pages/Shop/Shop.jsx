import { ROUTES } from "../../routes/routes,";
import styles from "../../styles/shop.module.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import SliderComp from "../../components/SliderComp/SliderComp";

import { guitars } from "../../guitars-data/guitars.data";

const Shop = () => {
  const [filters, setFilters] = useState({
    manufacturer: "Усі",
    type: "Усі",
    fret: "Усі",
    pickupType: "Усі",
    price: "Усі"
  });

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const guitarType = params.get('type') || "Усі";
    setFilters((prevFilters) => ({
      ...prevFilters,
      type: guitarType,
    }));
  }, [location]);

  const filteredGuitars = guitars.filter((guitar) => {
    const guitarManufacturer = (guitar.firm || "").toLowerCase();
    const filterManufacturer = (filters.manufacturer || "").toLowerCase();
    const guitarType = (guitar.type || "").toLowerCase();
    const filterType = (filters.type || "").toLowerCase();
    const guitarFrets = guitar.frets ? guitar.frets.toString() : "";
    const filterFrets = (filters.fret || "").toLowerCase();
    const guitarPickupType = (guitar.pickup || "").toLowerCase();
    const filterPickupType = (filters.pickupType || "").toLowerCase();
    const guitarCost = parseFloat(guitar.cost.replace(/\s/g, '')); // Удаление пробелов и преобразование в число

    let priceRange = [0, Infinity];
    if (filters.price !== "Усі") {
      priceRange = filters.price.split(" - ").map(value => parseFloat(value));
    }

    return (
      (filterManufacturer === "усі" || guitarManufacturer === filterManufacturer) &&
      (filterType === "усі" || guitarType === filterType) &&
      (filterFrets === "усі" || guitarFrets === filterFrets) &&
      (filterPickupType === "усі" || guitarPickupType === filterPickupType) &&
      (guitarCost >= priceRange[0] && guitarCost <= priceRange[1])
    );
  });

  return (
    <div className={styles.shop}>
      <div className={styles.pages}>
        <Link className={styles.link} to={ROUTES.HOME}>
          Головна
        </Link>{" "}
        / Магазин
      </div>
      <div className={styles.titleBox}>
        <SliderComp></SliderComp>
      </div>

      <div className={styles.container}>
        <Sidebar filters={filters} setFilters={setFilters} />
        <div className={styles.items}>
          {filteredGuitars.length === 0 ? (
            <p className={styles.empty}>Жодна гітара не відповідає поточним фільтрам :(</p>
          ) : (
            filteredGuitars.map((guitar) => (
              <Link
                to={`/guitars/${guitar.id}`}
                key={guitar.id}
                className={styles.item}
              >
                <div
                  className={styles.image}
                  style={{
                    width: "100%",
                    height: "600px",
                    background: `url("${guitar.image}")`,
                    backgroundColor: "#ffffff",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{guitar.name}</h3>
                  <p className={styles.cost}>{guitar.cost} ₴</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;

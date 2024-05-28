import { ROUTES } from "../../routes/routes,";
import styles from "../../styles/shop.module.scss";
import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

import { guitars } from "../../guitars-data/guitars.data";

// const Shop = () => {
//     return(
//         <div className={styles.shop}>
//             <div className={styles.pages}>
//                 <Link className={styles.link} to={ROUTES.HOME}>Home</Link> / Guitars
//             </div>
//             <div className={styles.titleBox}>
//                 <div className={styles.title}>
//                     <h2>GUITARS</h2>
//                 </div>
//             </div>
//             <div className={styles.container}>
//                 <Sidebar></Sidebar>
//                 <div className={styles.items}>
//                     {guitars.map(guitar => (
//                         <Link  to={`/guitars/${guitar.id}`} key={guitar.id} className={styles.item}>
//                         <div className={styles.image}
//                         style={{
//                             width: "100%",
//                             height: "600px",
//                             background: `url("${guitar.image}")`,
//                             backgroundColor: "#ffffff",
//                             backgroundSize: "contain",
//                             backgroundPosition: "center",
//                             backgroundRepeat: "no-repeat"
//                         }}
//                         ></div>
//                         <div className={styles.info}>
//                         <h3 className={styles.name}>{guitar.name}</h3>
//                         <p className={styles.cost}>{guitar.cost}</p>
//                         </div>
//                         </Link>
//                     ))}

//                 </div>
//             </div>
//         </div>
//     )
// }

const Shop = () => {
  const [filters, setFilters] = useState({
    manufacturer: "Усі", // Устанавливаем "Усі" по умолчанию
    type: "Усі", // Устанавливаем "Усі" по умолчанию
  });

  // Фильтрация гитар по производителю и типу
  const filteredGuitars = guitars.filter((guitar) => {
    const guitarManufacturer = (guitar.firm || "").toLowerCase(); // Приводим название производителя к нижнему регистру
    const filterManufacturer = (filters.manufacturer || "").toLowerCase(); // Приводим выбранный производитель к нижнему регистру
    const guitarType = (guitar.type || "").toLowerCase(); // Приводим тип гитары к нижнему регистру
    const filterType = (filters.type || "").toLowerCase(); // Приводим выбранный тип к нижнему регистру

    return (filterManufacturer === "усі" || guitarManufacturer === filterManufacturer) && 
           (filterType === "усі" || guitarType === filterType);
  });


  return (
    <div className={styles.shop}>
      <div className={styles.pages}>
        <Link className={styles.link} to={ROUTES.HOME}>
          Home
        </Link>{" "}
        / Guitars
      </div>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <h2>GUITARS</h2>
        </div>
      </div>

      <div className={styles.container}>
        <Sidebar filters={filters} setFilters={setFilters} />
        <div className={styles.items}>
          {filteredGuitars.map((guitar) => (
            <Link
              to={`/guitars/${guitar.id}`}
              key={guitar.id}
              className={styles.item}
            >
              {" "}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

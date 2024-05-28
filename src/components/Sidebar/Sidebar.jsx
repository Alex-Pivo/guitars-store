import React from "react";
import styles from "../../styles/sideBar.module.scss";
import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <>
//       <div className={styles.sidebar}>
//         <div className={styles.title}>Фільтри</div>
//         <nav>
//           <ul className={styles.menu}>
//             <li className={styles.box}>
//               <p className={styles.name}>Виробник</p>
//               <select className={styles.select} name="firm" id="1">
//                 <option value="value1" selected>Усі</option>
//                 <option value="value2" >
//                   Fender
//                 </option>
//                 <option value="value3">D'Angelico</option>
//                 <option value="value3">Les Paul</option>
//               </select>

//             </li>

//             <li className={styles.box}>
//               <p className={styles.name}>Тип</p>
//               <select className={styles.select} name="type" id="1">
//                 <option value="value1" selected>Усі</option>
//                 <option value="value2" >
//                   Електрогітари
//                 </option>
//                 <option value="value3">Акустичні гітари</option>
//                 <option value="value3">Бас гітари</option>
//               </select>
//             </li>

//             <li className={styles.box}>
//               <p className={styles.name}>Кількість ладів</p>
//               <select className={styles.select} name="lads" id="1">
//                 <option value="value1" selected>Усі</option>
//                 <option value="value2" >
//                   21
//                 </option>
//                 <option value="value3">22</option>
//                 <option value="value3">24</option>
//               </select>
//             </li>

//             <li className={styles.box}>
//               <p className={styles.name}>Матеріал деки</p>
//               <select className={styles.select} name="deka" id="1">
//                 <option value="value1" selected>Усі</option>
//                 <option value="value2" >
//                   21
//                 </option>
//                 <option value="value3">22</option>
//                 <option value="value3">24</option>
//               </select>
//             </li>

//             <li className={styles.box}>
//               <p className={styles.name}>Матеріал грифа</p>
//               <select className={styles.select} name="grif" id="1">
//                 <option value="value1" selected>Усі</option>
//                 <option value="value2" >
//                   21
//                 </option>
//                 <option value="value3">22</option>
//                 <option value="value3">24</option>
//               </select>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

import { useCart } from "../Cart/CartContext";
const manufacturers = ["Усі", "Fender", "D'Angelico", "Les Paul"];

const Sidebar = ({ filters, setFilters }) => {
  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.title}>Фільтри</div>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.box}>
              <p className={styles.name}>Виробник</p>
              <select
                className={styles.select}
                name="firm"
                id="1"
                onChange={(e) =>
                  handleFilterChange("manufacturer", e.target.value)
                }
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
                id="2"
                onChange={(e) => handleFilterChange("type", e.target.value)}
                value={filters.type}
              >
                {/* Варианты выбора типа гитар */}
                <option value="Усі">Усі</option>
                <option value="electric">Electric</option>
                <option value="acoustic">Acoustic</option>
                <option value="bass">Bass</option>
              </select>
            </li>
            <li className={styles.box}>
              <p className={styles.name}>Кількість ладів</p>
              <select
                className={styles.select}
                name="type"
                id="2"
                onChange={(e) => handleFilterChange("type", e.target.value)}
                value={filters.type}
              >
                {/* Варианты выбора типа гитар */}
                <option value="Усі">Усі</option>
                <option value="electric">Electric</option>
                <option value="acoustic">Acoustic</option>
                <option value="bass">Bass</option>
              </select>
            </li>
            <li className={styles.box}>
              <p className={styles.name}>Ціна</p>
              <select
                className={styles.select}
                name="type"
                id="2"
                onChange={(e) => handleFilterChange("type", e.target.value)}
                value={filters.type}
              >
                {/* Варианты выбора типа гитар */}
                <option value="Усі">Усі</option>
                <option value="electric">Electric</option>
                <option value="acoustic">Acoustic</option>
                <option value="bass">Bass</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

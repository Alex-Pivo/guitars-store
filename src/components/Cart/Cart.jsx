import React, { useState } from "react";
import styles from "./cart.module.scss";

import { useCart } from "./CartContext";

const Cart = ({ cartItems, onClose, isOpen }) => {
  const { cart, removeFromCart } = useCart();
  return (
    <div className={isOpen ? styles.cartBox__active : styles.cartBox__dis}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.title}>Корзина</h2>
          <svg
            onClick={onClose}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={styles.cart__items}>
          {cart.items.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.image__container}>
                <div
                  className={styles.image}
                  style={{
                    width: "80px",
                    height: "240px",
                    backgroundColor: "#f5f5f5",
                    background: `url("${item.image}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className={styles.info}>
                <h2 className={styles.name}>{item.name}</h2>
                <p className={styles.cost}>{item.cost}</p>
                <button
                  className={styles.btn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <p className={styles.price}>12000 $</p>
          <button className={styles.btn__price}>Оформити заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

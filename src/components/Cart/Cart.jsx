import React from "react";
import styles from "../../styles/cart.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { useCart } from "./CartContext";

const Cart = ({ onClose, isOpen }) => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => {
      const itemCost = parseFloat(item.cost);
      const itemQuantity = parseInt(item.quantity, 10);
      return total + itemCost * itemQuantity;
    }, 0);
  };

  const totalAmount = calculateTotal();

  return (
    <div className={isOpen ? styles.cartBox__active : styles.cartBox__dis}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.title}>Кошик</h2>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {cart.items.length === 0 ? (
          <p className={styles.emptyCart}>Кошик порожній :(</p>
        ) : (
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
                  <p className={styles.quant}>Кількість: {item.quantity}</p>
                  <p className={styles.cost}>
                    {parseInt(item.cost) * parseInt(item.quantity)} ₴
                  </p>
                  <button
                    className={styles.btn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.bottom}>
          {cart.items.length > 0 && (
            <React.Fragment>
              <p className={styles.price}>{totalAmount.toFixed(2)} ₴</p>
              <Link
                to={ROUTES.ORDER}
                className={styles.btn__price}
                onClick={onClose}
              >
                Переглянути замовлення
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

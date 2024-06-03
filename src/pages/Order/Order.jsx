import React, { useState, useRef } from "react";
import { useCart } from "../../components/Cart/CartContext";
import styles from "../../styles/order.module.scss";
import GooglePayButton from "@google-pay/button-react";
import axios from 'axios';

const Order = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => {
      const itemCost = parseFloat(item.cost);
      const itemQuantity = parseInt(item.quantity, 10);
      return total + itemCost * itemQuantity;
    }, 0);
  };

  const totalAmount = calculateTotal();

  const handlePaymentSuccess = async (paymentRequest) => {
    console.log("Payment successful", paymentRequest);
    setIsPaymentSuccessful(true);

    try {
      // Отправляем запрос на сервер для отправки письма
      await axios.post('https://api-shjq4d8w6-alexpivos-projects.vercel.app/api/send-email', {
        to: email,
        subject: "Заказ успешно оформлен",
        html: `
          <p>Спасибо за ваш заказ!</p>
          <p>Сумма заказа: ${totalAmount.toFixed(2)} ₴</p>
          <p>Ваш заказ:</p>
          <ul>
            ${cart.items.map(item => `<li>${item.name} - ${item.cost} ₴</li>`).join('')}
          </ul>
        `
      });

      console.log("Email sent successfully");
      clearCart();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Оформление заказа</h2>
      {isPaymentSuccessful ? (
        <div className={styles.successMessage}>
          <h3>Оплата прошла успешно!</h3>
          <p>Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <div className={styles.info}>
          <h3 className={styles.subtitle}>Ваши товары:</h3>
          <div className={styles.items}>
            {cart.items.map((item) => (
              <div className={styles.item} key={item.id}>
                <div className={styles.left}>
                  <div
                    className={styles.image}
                    style={{
                      width: "80px",
                      height: "220px",
                      backgroundColor: "#f5f5f5",
                      background: `url("${item.image}")`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className={styles.right}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.quant}>Количество: {item.quantity}</p>
                  <p className={styles.cost}>Цена: {item.cost} ₴</p>

                  <button
                    className={styles.btn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
            {cart.items.length === 0 && (
              <p className={styles.mes}>
                В вашем заказе нет товаров. Добавьте товар в корзину.
              </p>
            )}
          </div>
          <form ref={form} className={styles.bottom}>
            <div className={styles.form}>
              <label>
                Имя:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <h3 className={styles.main__cost}>
              Общая сумма: <span>{totalAmount.toFixed(2)} ₴</span>
            </h3>

            {cart.items.length !== 0 && (
              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "BCR2DN4TZWC23XQ3",
                    merchantName: "Demo Merchant",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: totalAmount.toFixed(2),
                    currencyCode: "UAH",
                    countryCode: "UA",
                  },
                }}
                onLoadPaymentData={handlePaymentSuccess}
              />
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Order;


import React, { useState, useRef } from "react";
import { useCart } from "../../components/Cart/CartContext";
import styles from "../../styles/order.module.scss";
import GooglePayButton from "@google-pay/button-react";
import emailjs from "emailjs-com";

const Order = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState("loading");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
    if (!name || !email) {
      alert("Будь ласка, введіть ваше ім'я та електронну пошту.");
      return;
    }

    console.log("Payment successful", paymentRequest);
    setIsPaymentSuccessful("true");

    try {
      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        total_amount: totalAmount.toFixed(2),
        order_details: cart.items
          .map((item) => `${item.name} - ${item.cost} ₴`)
          .join(", "),
      };

      await emailjs.send(
        "service_f4nh1bw",
        "template_2pafgsq",
        templateParams,
        "zfvxbPUhkQVKIPpld"
      );

      console.log("Email sent successfully");
      clearCart();
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Оформлення замовлення</h2>
      {isPaymentSuccessful === "true" && (
        <div className={styles.successMessage}>
          <h3>Оплата пройшла успішно!</h3>
          <p>Дякуємо за ваше замовлення. На вашу пошту було надіслано лист з деталями замовлення.</p>
        </div>
      )}  
      {isPaymentSuccessful === "loading" && (
        <div className={styles.info}>
          <h3 className={styles.subtitle}>Ваші товари:</h3>
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
                  <p className={styles.quant}>Кількість: {item.quantity}</p>
                  <p className={styles.cost}>Ціна: {item.cost} ₴</p>

                  <button
                    className={styles.btn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Видалити
                  </button>
                </div>
              </div>
            ))}
            {cart.items.length === 0 && (
              <p className={styles.mes}>
                У вашому замовленні немає товарів. Додайте товар до кошика.
              </p>
            )}
          </div>
          <form ref={form} className={styles.bottom} name="order_form">
            <div className={styles.form}>
              <label>
                Ім'я:
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Номер телефону:
                <input
                  type="phone"
                  name="user_phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>
              <input
                type="hidden"
                name="total_amount"
                value={totalAmount.toFixed(2)}
              />
              <input
                type="hidden"
                name="order_details"
                value={cart.items
                  .map((item) => `${item.name} - ${item.cost} ₴`)
                  .join(", ")}
              />
            </div>

            <h3 className={styles.main__cost}>
              Загальна сума: <span>{totalAmount.toFixed(2)} ₴</span>
            </h3>

            {cart.items.length !== 0 && (
              <GooglePayButton
                environment="TEST"
                onLoadPaymentData={handlePaymentSuccess}
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
              />
            )}
          </form>
        </div>
      )}
      {isPaymentSuccessful === "false" && (
        <div className={styles.errorMessage}>
          <h3>Помилка під час оплати!</h3>
          <p>
            Сталася помилка при обробці вашого платежу. Будь ласка, спробуйте
            знову пізніше або зверніться до нас.
          </p>
        </div>
      )}
    </div>
  );
};

export default Order;

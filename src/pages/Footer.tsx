import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponentFooterType = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.freebies}>
        <div className={styles.deliveryDetails}>
          <h2 className={styles.freeDelivery}>Free Delivery</h2>
          <p className={styles.forAllOders}>
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div className={styles.deliveryDetails1}>
          <h2 className={styles.daysReturn}>90 Days Return</h2>
          <p className={styles.ifGoodsHave}>
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className={styles.deliveryDetails2}>
          <h2 className={styles.securePayment}>Secure Payment</h2>
          <p className={styles.securePaymentConsectetur}>
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;

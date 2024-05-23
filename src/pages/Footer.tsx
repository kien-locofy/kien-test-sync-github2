import { FunctionComponent } from "react";
import DeliveryDetails from "../components/DeliveryDetails";
import styles from "./Footer.module.css";

const Footer: FunctionComponentFooterType = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.freebies}>
        <DeliveryDetails
          freeDelivery="Free Delivery"
          forAllOdersOver50Consecte="For all oders over $50, consectetur adipim scing elit."
        />
        <DeliveryDetails
          freeDelivery="90 Days Return"
          forAllOdersOver50Consecte="If goods have problems, consectetur adipim scing elit."
        />
        <DeliveryDetails
          freeDelivery="Secure Payment"
          forAllOdersOver50Consecte="100% secure payment, consectetur adipim scing elit."
        />
      </section>
    </div>
  );
};

export default Footer;

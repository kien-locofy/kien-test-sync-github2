import { FunctionComponent } from "react";
import styles from "./DeliveryDetails.module.css";

export type DeliveryDetailsType = {
  className?: string;
  freeDelivery?: string;
  forAllOdersOver50Consecte?: string;
};

const DeliveryDetails: FunctionComponent<DeliveryDetailsType> = ({
  className = "",
  freeDelivery,
  forAllOdersOver50Consecte,
}) => {
  return (
    <div className={[styles.deliveryDetails, className].join(" ")}>
      <h2 className={styles.freeDelivery}>{freeDelivery}</h2>
      <p className={styles.forAllOders}>{forAllOdersOver50Consecte}</p>
    </div>
  );
};

export default DeliveryDetails;

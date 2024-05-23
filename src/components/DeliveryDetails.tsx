import { FunctionComponent } from "react";

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
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[282px] max-w-full text-left text-13xl text-black font-poppins ${className}`}
    >
      <h2 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi mq750:text-7xl">
        {freeDelivery}
      </h2>
      <p className="m-0 self-stretch relative text-xl text-darkgray mq450:text-base">
        {forAllOdersOver50Consecte}
      </p>
    </div>
  );
};

export default DeliveryDetails;

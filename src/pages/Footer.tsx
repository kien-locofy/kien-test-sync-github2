import { FunctionComponent } from "react";
import DeliveryDetails from "../components/DeliveryDetails";

const Footer: FunctionComponentFooterType = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 bg-snow flex flex-row flex-wrap items-start justify-start py-24 px-[100px] box-border gap-[46px] max-w-full text-left text-13xl text-black font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[23px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border">
        <DeliveryDetails
          freeDelivery="Free Delivery"
          forAllOdersOver50Consecte="For all oders over $50, consectetur adipim scing elit."
        />
        <DeliveryDetails
          freeDelivery="90 Days Return"
          forAllOdersOver50Consecte="If goods have problems, consectetur adipim scing elit."
        />
        <div className="flex-1 flex flex-col items-start justify-start min-w-[282px] max-w-full">
          <h2 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi mq750:text-7xl">
            Secure Payment
          </h2>
          <p className="m-0 self-stretch relative text-xl text-darkgray mq450:text-base">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;

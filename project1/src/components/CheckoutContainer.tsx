import CheckoutCard from "./CheckoutCard";
import type { CheckoutContainerProps } from "./ThriftHappens";

export default function CheckoutContainer({
  checkoutList,
  handleDeleteCheckout,
}: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      {checkoutList.map((entry) => (
        <CheckoutCard
          key={entry.id}
          {...entry}
          handleDeleteCheckout={handleDeleteCheckout}
        />
      ))}
    </div>
  );
}

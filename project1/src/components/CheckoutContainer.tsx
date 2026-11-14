import CheckoutCard from "./CheckoutCard";
import type { CheckoutContainerProps } from "./ThriftHappens";

export default function CheckoutContainer({
  CheckoutList,
  handleDeleteCheckout,
}: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      {CheckoutList.map((Checkout) => (
        <CheckoutCard
          key={Checkout.id}
          {...Checkout}
          handleDeleteCheckout={handleDeleteCheckout}
        />
      ))}
    </div>
  );
}

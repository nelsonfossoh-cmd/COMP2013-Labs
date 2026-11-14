import ItemCard from "./ItemCard";
import type { ItemsContainerProps } from "./ThriftHappens";

export default function ItemsContainer({
  products,
  handleAddToCheckout,
}: ItemsContainerProps) {
  return (
    <div className="ItemsContainer">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          handleAddToCheckout={handleAddToCheckout}
          {...product}
        />
      ))}
    </div>
  );
}

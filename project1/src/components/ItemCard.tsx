import { useState } from "react";
import type { ItemCardFunctions } from "./ThriftHappens";

export default function ItemCard({
  id,
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
  quantity,
  handleAddToCheckout,
}: ItemCardFunctions) {
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  return (
    <div className="ItemCard">
      <p>{name}</p>
      <img src={image} alt="" width="150px" border-radius="8px" />
      <p>fit: {fit}</p>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
      <p>{description}</p>
      <p>Size: {size}</p>
      <p>
        <b>Price</b>: {price}
      </p>
      <p>
        <b>Quantity</b>: {quantity}
      </p>
      <button
        disabled={quantity == 0}
        onClick={() =>
          setItemQuantity((itemQuantity) =>
            Math.min(Math.max(itemQuantity - 1, 0), quantity),
          )
        }
      >
        -
      </button>
      <p>{itemQuantity}</p>
      <button
        disabled={quantity == 0}
        onClick={() =>
          setItemQuantity((itemQuantity) =>
            Math.min(Math.max(itemQuantity + 1, 0), quantity),
          )
        }
      >
        +
      </button>
      <br />
      <button
        disabled={quantity == 0}
        onClick={() => {
          handleAddToCheckout(id, quantity, itemQuantity);
          setItemQuantity(0);
        }}
      >
        Add to Cart
      </button>
      <h3>{quantity == 0 && "Out of stock"}</h3>
    </div>
  );
}

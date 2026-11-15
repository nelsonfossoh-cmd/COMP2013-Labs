import type { CheckoutCardFunctions } from "./ThriftHappens";

export default function CheckoutCard({
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
  handleDeleteCheckout,
}: CheckoutCardFunctions) {
  return (
    <div className="CheckoutCard">
      <p>{name}</p>
      <img src={image} alt="" width="150px" />
      <p>fit: {fit}</p>
      <p>Category: {category}</p>
      <p>Color: {color}</p>
      <p>{description}</p>
      <p>Size: {size}</p>
      <p>
        <b>Price</b>: ${price.toFixed(2)}
      </p>
      <p>
        <b>Quantity</b>: {quantity}
      </p>
      <p>
        <b>Subtotal</b>: ${(price * quantity).toFixed(2)}
      </p>
      <button onClick={() => handleDeleteCheckout(id)}>Remove</button>
    </div>
  );
}

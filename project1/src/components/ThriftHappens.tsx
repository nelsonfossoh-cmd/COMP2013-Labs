import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import type { Fit } from "../data/data";
import type { ClothingCategory } from "../data/data";
import type { ClothingSize } from "../data/data";
import CheckoutContainer from "./CheckoutContainer";
import { products as initialProducts } from "../data/data";

export interface ItemsContainerProps {
  products: ClothingProduct[];
  handleAddToCheckout: (
    id: number,
    quantity: number,
    itemQuantity: number,
  ) => void;
}

export interface ItemCardFunctions extends ClothingProduct {
  handleAddToCheckout: (
    id: number,
    quantity: number,
    itemQuantity: number,
  ) => void;
}

export interface CheckoutCardProps {
  id: number;
  name: string;
  image: string;
  fit: Fit;
  category: ClothingCategory;
  color: string;
  description: string;
  size: ClothingSize;
  price: number;
  quantity: number;
}

export interface CheckoutCardFunctions extends CheckoutCardProps {
  handleDeleteCheckout: (id: number) => void;
}

export interface CheckoutContainerProps {
  CheckoutList: CheckoutCardProps[];
  handleDeleteCheckout: (id: number) => void;
}

export default function ThriftHappens() {
  //States

  //1.A state to store the item

  //2.A state to handle all the products
  const [products, setProducts] = useState<ClothingProduct[]>(initialProducts);

  //3.A state to handle the checkout list
  const [checkoutList, setCheckoutList] = useState<CheckoutCardProps[]>([]);

  //4.A state for the total price
  const [totalPrice, setTotalPrice] = useState<number>(0);

  //Handlers

  //1.Handle the onClick event to add to the checkout
  const handleAddToCheckout = (
    id: number,
    quantity: number,
    itemQuantity: number,
  ) => {
    const addedQuantity =
      quantity > 0 ? (itemQuantity === 0 ? 1 : itemQuantity) : 0;
    const selectedItem = products.find((entry) => entry.id === id);

    if (!selectedItem) return;

    const existingItem = checkoutList.find((entry) => entry.id === id);

    if (existingItem) {
      setCheckoutList((prevList) =>
        prevList.map((entry) =>
          entry.id === id
            ? {
                ...entry,
                quantity: entry.quantity + addedQuantity,
              }
            : entry,
        ),
      );
    } else {
      setCheckoutList((prevList) => [
        ...prevList,
        { ...selectedItem, quantity: addedQuantity },
      ]);
    }

    setProducts((prevList) =>
      prevList.map((entry) =>
        entry.id === selectedItem.id
          ? { ...entry, quantity: quantity - addedQuantity }
          : entry,
      ),
    );

    setTotalPrice((previous) => previous + selectedItem.price * addedQuantity);
  };

  //2. Handle onClick Event to delete a checkout from a checkout list
  const handleDeleteCheckout = (id: number) => {
    const deletingItem = checkoutList.find((entry) => entry.id === id);

    if (!deletingItem) return;

    setCheckoutList((prevList) => prevList.filter((entry) => entry.id !== id));

    setProducts((prevList) =>
      prevList.map((entry) =>
        entry.id === deletingItem.id
          ? { ...entry, quantity: entry.quantity + deletingItem.quantity }
          : entry,
      ),
    );

    setTotalPrice(
      (previous) => previous - deletingItem.quantity * deletingItem.price,
    );
  };

  //3. Handle the onClick Event to empty the checkout
  const handleEmptyCheckout = () => {
    /*setProducts((prevList) =>
      prevList.map((product) => ({
        ...product,
        quantity:
          product.quantity +
          (checkoutList.find((entry) => entry.id === product.id)?.quantity ??
            0),
      })),
    );*/
    setProducts(initialProducts);
    setCheckoutList([]);
  };

  //Main return
  return (
    <div className="ThriftStore">
      <div className="Products">
        <img src="src\assets\images\logo.png" alt="" width="200px" />
        <h1>Thrift Store</h1>
        <ItemsContainer
          products={products}
          handleAddToCheckout={handleAddToCheckout}
        />
      </div>
      <div className="Cart">
        <h1>Checkout</h1>
        <button onClick={() => handleEmptyCheckout()}>Empty Checkout</button>
        {checkoutList.length === 0 && <p>Cart is Empty</p>}
        <CheckoutContainer
          CheckoutList={checkoutList}
          handleDeleteCheckout={handleDeleteCheckout}
        />
        <h2>
          Total: ${(checkoutList.length === 0 ? 0 : totalPrice).toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

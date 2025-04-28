import { useState } from "react";
export interface IProduct {
  id: number;
  name: string;
  dataTestId: string;
  price: number;
  description: string;
  image: string;
  qty?: number;
  isSelected: boolean;
}
export default function useProducts() {
  const [productSelected, setProductSelected] = useState<IProduct[]>([
    {
      id: 0,
      name: "",
      dataTestId: "",
      price: 0,
      description: "",
      image: "",
      isSelected: false,
    },
  ]);
  const handleAddToCart = (product: IProduct) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    if (
      currentCart.length === 0 ||
      currentCart.find((item: IProduct) => item.id !== product.id)
    ) {
      currentCart.push({ ...product, qty: 1, isSelected: true });
      setProductSelected(currentCart);
      sessionStorage.setItem("cartItems", JSON.stringify(currentCart));
    }
  };

  const handleRemoveCart = (product: IProduct) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    const newCart = currentCart.filter(
      (item: IProduct) => item.id !== product.id
    );
    setProductSelected(newCart);
    sessionStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  return {
    productSelected,
    setProductSelected,
    handleAddToCart,
    handleRemoveCart,
  };
}

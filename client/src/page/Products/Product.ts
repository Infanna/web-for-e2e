import { useState } from "react";
import { useCart } from "../../components/cart-provider/CartProvider";
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

  const { addCount, removeCount } = useCart();
  const handleAddToCart = (product: IProduct) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    if (
      currentCart.length === 0 ||
      currentCart.find((item: IProduct) => item.id !== product.id)
    ) {
      currentCart.push({ ...product, qty: 1, isSelected: true });
      setProductSelected(currentCart);
      addCount();
      sessionStorage.setItem("cartItems", JSON.stringify(currentCart));
    }
  };

  const handleRemoveCart = (product: IProduct) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    const newCart = currentCart.filter(
      (item: IProduct) => item.id !== product.id
    );
    setProductSelected(newCart);
    removeCount();
    sessionStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  return {
    productSelected,
    setProductSelected,
    handleAddToCart,
    handleRemoveCart,
  };
}

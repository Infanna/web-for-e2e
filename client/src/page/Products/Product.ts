import { useEffect, useMemo, useState } from "react";
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
  const [productSelected, setProductSelected] = useState<IProduct[]>(() => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const { addCount, removeCount } = useCart();

  useEffect(() => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      setProductSelected(JSON.parse(storedCartItems));
    }
  }, []);

  const checkCart = useMemo(() => {
    return productSelected;
  }, [productSelected]);

  const handleAddToCart = (product: IProduct) => {
    if (
      checkCart.length === 0 ||
      checkCart.find((item: IProduct) => item.id !== product.id)
    ) {
      checkCart.push({ ...product, qty: 1, isSelected: true });
      setProductSelected(checkCart);
      addCount();
      sessionStorage.setItem("cartItems", JSON.stringify(checkCart));
    }
  };

  const handleRemoveCart = (product: IProduct) => {
    const newCart = checkCart.filter(
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
    checkCart,
  };
}

import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  cartItems: number;
  addCount: () => void;
  removeCount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<number>(0);

  const addCount = () => {
    setCartItems((prev) => prev + 1);
  };

  const removeCount = () => {
    setCartItems((prev) => prev - 1);
  };

  return (
    <CartContext.Provider value={{ cartItems, addCount, removeCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

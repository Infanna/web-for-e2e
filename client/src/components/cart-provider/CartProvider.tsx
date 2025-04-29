import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartContextType {
  cartItems: number;
  addCount: () => void;
  removeCount: () => void;
  setCartCountToZero: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<number>(0);

  useEffect(() => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems).length);
    }
  }, []);

  const addCount = () => {
    setCartItems((prev) => prev + 1);
  };

  const removeCount = () => {
    setCartItems((prev) => prev - 1);
  };

  const setCartCountToZero = () => {
    setCartItems(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addCount, removeCount, setCartCountToZero }}
    >
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

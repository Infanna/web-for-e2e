import { useEffect, useState } from "react";
import { useNavigateToPage } from "../../utils/navigate/navigate";
import Checkout from "../Checkout/Checkout";

const CartPage: React.FC = () => {
  const navigateToPage = useNavigateToPage();

  const goToProductPage = () => {
    navigateToPage("/products");
  };
  const goToCheckoutInformationPage = () => {
    navigateToPage("/checkout-information");
  };

  interface CartItem {
    id: number;
    qty: number;
    name: string;
    description: string;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);

  useEffect(() => {
    try {
      const storedData = sessionStorage.getItem("cartItems");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          const uniqueItems = parsedData.filter(
            (item: CartItem, index: number, self: CartItem[]) =>
              index === self.findIndex((i) => i.id === item.id)
          );
          setCartItems(uniqueItems);
        }
      }

      const storedShowCheckout = sessionStorage.getItem("showCheckout");
      setShowCheckout(storedShowCheckout === "true");
    } catch (error) {
      console.error("Failed to parse data from sessionStorage:", error);
      setCartItems([]);
      setShowCheckout(false);
    }
  }, []);

  const handleRemove = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="container py-4 bg-white">
      <h1 data-testid="page-title" className="mb-4">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <div
          data-testid="empty-cart-message"
          className="text-center text-muted"
        >
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-start mb-3 gap-3">
            <div data-testid="quantity-title">QTY</div>
            <div data-testid="description-title" className="flex-grow-1">
              Description
            </div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-start justify-content-between border p-3 rounded mb-3"
            >
              <div className="d-flex align-items-start gap-3">
                <div
                  data-testid="quantity-box"
                  className="d-flex justify-content-center align-items-center border rounded"
                  style={{ height: "44px", width: "55px" }}
                >
                  {item.qty}
                </div>
                <div>
                  <div data-testid="product-name" className="fw-bold">
                    {item.name}
                  </div>
                  <div data-testid="description-detail" className="text-muted">
                    {item.description}
                  </div>
                </div>
              </div>
              {showCheckout === true ? null : (<button
                data-testid="remove-button"
                onClick={() => handleRemove(item.id)}
                className="btn btn-outline-danger"
              >
                Remove
              </button>)}
            </div>
          ))}
        </>
      )}

      {!showCheckout && (
        <div className="d-flex justify-content-between mt-4">
          <button
            onClick={goToProductPage}
            data-testid="continue-shopping-button"
            className="btn btn-outline-primary"
          >
            Continue Shopping
          </button>
          <button
            onClick={goToCheckoutInformationPage}
            data-testid="checkout-button"
            className="btn btn-primary"
          >
            Checkout
          </button>
        </div>
      )}

      {showCheckout && <Checkout />}
    </div>
  );
};

export default CartPage;

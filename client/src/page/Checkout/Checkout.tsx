import { useState, useEffect } from "react";
import { useNavigateToPage } from "../../utils/navigate/navigate";
import { useCart } from "../../components/cart-provider/CartProvider";

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [itemTotal, setItemTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigateToPage = useNavigateToPage();

  const goToSummaryPage = () => {
    clearCart();
    navigateToPage("/summary");
  };

  const onCancel = () => {
    navigateToPage("/products");
  };

  const { setCartCountToZero } = useCart();

  const clearCart = () => {
    sessionStorage.removeItem("cartItems");
    sessionStorage.setItem("showCheckout", "false");
    setCartCountToZero();
  };

  useEffect(() => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);

      const total = parsedCartItems.reduce((sum: number, item: any) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.qty, 10) || 0;
        return sum + price * quantity;
      }, 0);
      const calculatedTax = total * 0.07;
      const calculatedTotalPrice = total + calculatedTax;

      setItemTotal(total);
      setTax(calculatedTax);
      setTotalPrice(calculatedTotalPrice);
    }
  }, []);

  return (
    <div className="container py-4 bg-white">
      <h4>Payment Information:</h4>
      <div data-testid="payment-info">OddsCard #{Math.floor(10000 + Math.random() * 90000)}</div>
      <h4 className="pt-2">Shipping Information:</h4>
      <ul data-testid="shipping-info">
        {cartItems.map((item, index) => (
          <li key={index} data-testid={`cart-item-${index}`}>{item.name}</li>
        ))}
      </ul>
      <h4 className="pt-2">Price Total</h4>
      <div data-testid="item-total">Item total: ${itemTotal.toFixed(2)}</div>
      <div data-testid="tax">Tax: ${tax.toFixed(2)}</div>
      <div data-testid="total-price">Total: ${totalPrice.toFixed(2)}</div>
      <div className="row pt-3">
        <div className="col-2">
          <button
            type="button"
            className="btn btn-light w-100"
            data-testid="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
        <div className="col-8 "></div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-primary w-100"
            data-testid="finish-button"
            onClick={goToSummaryPage}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

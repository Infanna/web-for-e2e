import { useState } from "react";
import { useNavigateToPage } from "../../utils/navigate/navigate";

const CartPage = () => {
  const navigateToPage = useNavigateToPage();
    const goToProductPage = () => {
      navigateToPage("/products");
    };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ODDS Labs Backpack",
      description:
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      quantity: 1,
    },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container py-4 bg-white">
      <h1 data-testid="page-title" className="mb-4">
        Your Cart
      </h1>
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
              {item.quantity}
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
          <button
            data-testid="remove-button"
            onClick={() => handleRemove(item.id)}
            className="btn btn-outline-danger"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={goToProductPage}
          data-testid="continue-shopping-button"
          className="btn btn-outline-primary"
        >
          Continue Shopping
        </button>
        <button data-testid="checkout-button" className="btn btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

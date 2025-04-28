import { useState } from "react";

const CartPage = () => {
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
      <h1 className="mb-4">Your Cart</h1>
      <div className="d-flex justify-content-start mb-3 gap-3">
        <div>QTY</div>
        <div className="flex-grow-1">Description</div>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-start justify-content-between border p-3 rounded mb-3"
        >
          <div className="d-flex align-items-start gap-3">
            <input
              type="number"
              value={item.quantity}
              min="1"
              className="form-control w-25"
              readOnly
            />
            <div>
              <div className="fw-bold">{item.name}</div>
              <div className="text-muted">{item.description}</div>
            </div>
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="btn btn-outline-danger"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-primary">Continue Shopping</button>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

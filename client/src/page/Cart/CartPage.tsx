import { useState } from "react";

const CartPage = () =>{
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
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-6 font-semibold mb-4">
        <div>QTY</div>
        <div className="col-span-5">Description</div>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-start justify-between border p-4 rounded-lg mb-4"
        >
          <div className="flex items-start space-x-4">
            <input
              type="number"
              value={item.quantity}
              min="1"
              className="w-12 border rounded p-1"
              readOnly
            />
            <div>
              <div className="font-bold">{item.name}</div>
              <div className="text-gray-600">{item.description}</div>
            </div>
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="border border-gray-400 rounded px-3 py-1 hover:bg-gray-100"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button className="border border-blue-500 text-blue-500 rounded px-4 py-2 hover:bg-blue-50">
          Continue Shopping
        </button>
        <button className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
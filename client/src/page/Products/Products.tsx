import { useState } from "react";
import { products } from "../../shared/constant/products";
interface IProduct {
  id: number;
  name: string;
  dataTestId: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
}
export const Products = () => {
  const [isSelected, setIsSelected] = useState(false);
  const handleAddToCart = (product: IProduct) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    currentCart.push(product);
    sessionStorage.setItem("cartItems", JSON.stringify(currentCart));
  };

  const handleRemoveCart = (product: IProduct) => {
    const currentCart = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    const newCart = currentCart.filter(
      (item: IProduct) => item.id !== product.id
    );
    setIsSelected(false);
    sessionStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  return (
    <div className="container my-3">
      <p className="fs-5" data-testid="page-title">
        Products
      </p>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100" data-testid={`product-${product.id}`}>
              <img
                src={product.image}
                data-testid={`product-image-${product.dataTestId}`}
                className="card-img-top"
                alt={product.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  data-testid={`product-name-${product.dataTestId}`}
                >
                  {product.name}
                </h5>
                <h6
                  className="card-subtitle mb-2 text-muted"
                  data-testid={`product-price-${product.dataTestId}`}
                >
                  ${product.price.toFixed(2)}
                </h6>
                <p
                  className="card-text"
                  data-testid={`product-description-${product.dataTestId}`}
                >
                  {product.description}
                </p>
                <div className="d-flex justify-content-end">
                  {!isSelected && (
                    <button
                      data-testid="add-cart-button"
                      className="btn btn-primary mt-3"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                  {isSelected && (
                    <button
                      data-testid="add-cart-button"
                      className="btn btn-secondary mt-3"
                      onClick={() => handleRemoveCart(product)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

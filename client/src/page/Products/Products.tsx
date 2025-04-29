import { createContext, useEffect, useState } from "react";
import { products } from "../../shared/constant/products";
import useProducts, { IProduct } from "./Product";
import { IUser } from "../../shared/interface/user.interface";

export const CountCartContext = createContext(0);
export const Products = () => {
  const [productList, setProductList] = useState<IProduct[]>(products);
  const { handleAddToCart, handleRemoveCart, productSelected } = useProducts();

  useEffect(() => {
    const userInfo: IUser = JSON.parse(sessionStorage.getItem("login") || "{}");

    switch (userInfo.username) {
      case "out_of_stock_user":
        setProductList([]);
        break;
      default:
        setProductList(products);
        break;
    }
  }, []);

  return (
    <div className="container my-3">
      <p className="fs-5" data-testid="page-title">
        Products
      </p>
      <div className="row">
        {productList.map((product: IProduct) => (
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
                  {!productSelected.find(
                    (item) => item.id === product.id && item.isSelected
                  ) && (
                    <button
                      data-testid="add-cart-button"
                      className="btn btn-primary mt-3"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                  {productSelected.find(
                    (item) => item.id === product.id && item.isSelected
                  ) && (
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
        {productList.length === 0 && (
          <p className="fs-5" data-testid="page-title">
            Out of Stock
          </p>
        )}
      </div>
    </div>
  );
};

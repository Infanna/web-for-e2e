import { products } from "../../shared/constant/products";

export const Products = () => {
  const handleAddToCart = () => {
    console.log("add");
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
                  <button
                    data-testid="add-cart-button"
                    className="btn btn-primary mt-3"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

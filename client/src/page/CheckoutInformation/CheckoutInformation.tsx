const CheckoutInformation: React.FC = () => {
  return (
    <main className="container">
      <div className="row"></div>
      <div className="row gap-3">
        <div className="row">
          <div className="col">
            <input
              className="form-control cols-6"
              type="text"
              value="Title"
              aria-label="Title"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              value="House number"
              aria-label="House number"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Firstname"
              aria-label="Firstname"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Street"
              aria-label="Street"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Lastname"
              aria-label="Firstname"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Sub disctrict"
              aria-label="Sub disctrict"
            />
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="District"
              aria-label="District"
            />
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Province"
              aria-label="Province"
            />
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Postalcode"
              aria-label="Postalcode"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutInformation;

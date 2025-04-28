const CheckoutInformation: React.FC = () => {
  const formSubmit = (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    form.currentTarget.classList.add("was-validated");
  };
  const action = (formdata: FormData) => {
    console.log(Array.from(formdata.keys()));
  };
  return (
    <div className="container">
      <form
        className="needs-validation d-flex flex-column row-gap-3"
        noValidate
        onSubmit={formSubmit}
        action={action}
      >
        <div className="row">
          <h2> Checkout </h2>
        </div>
        <div className="row">
          <div className="col d-flex flex-column row-gap-2">
            <div className="row">
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="title"
                  required
                >
                  <option value="">Select</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="None">None</option>
                </select>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="house-number"
                  placeholder="House number"
                  aria-label="House number"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="first-name"
                  placeholder="Firstname"
                  aria-label="Firstname"
                  required
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="street"
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
                  name="lastname"
                  placeholder="Lastname"
                  aria-label="Firstname"
                  required
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="sub-district"
                  placeholder="Sub disctrict"
                  aria-label="Sub disctrict"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col"></div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="district"
                  placeholder="District"
                  aria-label="District"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col"></div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="province"
                  placeholder="Province"
                  aria-label="Province"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="postal-code"
                  placeholder="Postalcode"
                  aria-label="Postalcode"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button type="button" className="btn btn-light w-100">
              Cancel
            </button>
          </div>
          <div className="col-8"></div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary w-100">
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutInformation;

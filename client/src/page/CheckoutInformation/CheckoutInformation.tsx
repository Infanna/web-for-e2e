const CheckoutInformation: React.FC = () => {
  const formSubmit = (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    form.currentTarget.classList.add("was-validated");
    if (!form.currentTarget.checkValidity()) {
      return;
    }
    const formdata = new FormData(form.currentTarget);
    // TODO: This need to send or store somewhere
    const _data = formdata
      .entries()
      .reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = value.toString() || "-";
        return acc;
      }, {});
  };
  return (
    <div className="container">
      <form
        className="needs-validation d-grid pt-3"
        style={{ gridTemplateRows: "auto 1fr auto", height: "90vh" }}
        noValidate
        onSubmit={formSubmit}
      >
        <div className="row">
          <h4> Checkout information </h4>
        </div>
        <div className="row justify-content-center py-5">
          <div className="w-75">
            <div className="col d-flex flex-column row-gap-2">
              <div className="row">
                <div className="col">Name</div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="title"
                    data-testid="customer-title"
                    required
                  >
                    <option value="">Select title *</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    placeholder="Firstname *"
                    aria-label="Firstname"
                    data-testid="customer-firstname"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    placeholder="Lastname *"
                    aria-label="Firstname"
                    data-testid="customer-lastname"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">Address</div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="houseNumber"
                    placeholder="House number *"
                    aria-label="House number"
                    data-testid="customer-house-number"
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
                    data-testid="customer-street"
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="subDistrict"
                    placeholder="Sub disctrict *"
                    aria-label="Sub disctrict"
                    data-testid="customer-sub-district"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="district"
                    placeholder="District *"
                    aria-label="District"
                    data-testid="customer-district"
                    required
                  />
                </div>

                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="province"
                    placeholder="Province *"
                    aria-label="Province"
                    data-testid="customer-province"
                    required
                  />
                </div>

                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    name="postalCode"
                    placeholder="Postalcode *"
                    aria-label="Postalcode"
                    data-testid="customer-postalcode"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-light w-100"
              data-testid="cancel-button"
            >
              Cancel
            </button>
          </div>
          <div className="col-8"></div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-primary w-100"
              data-testid="continue-button"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutInformation;

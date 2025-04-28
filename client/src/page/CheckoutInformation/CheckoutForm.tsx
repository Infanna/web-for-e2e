export const NameForm: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export const AddressForm: React.FC = () => {
  return (
    <>
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
    </>
  );
};

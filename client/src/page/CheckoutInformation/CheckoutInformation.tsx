import { useNavigate } from "react-router-dom";
import { AddressForm, NameForm } from "./CheckoutForm";

const CheckoutInformation: React.FC = () => {
  const navigate = useNavigate();

  const formSubmit = (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    form.currentTarget.classList.add("was-validated");
    if (!form.currentTarget.checkValidity()) {
      return;
    }
    const formdata = new FormData(form.currentTarget);
    const data = formdata
      .entries()
      .reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = value.toString() || "-";
        return acc;
      }, {});

    sessionStorage.setItem("checkout-information", JSON.stringify(data));
    // TODO: navigate to next page
  };

  const onCancel = () => {
    navigate("/cart");
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
              <NameForm />
              <div className="row">
                <div className="col">Address</div>
              </div>
              <AddressForm />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-light w-100"
              data-testid="cancel-button"
              onClick={onCancel}
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

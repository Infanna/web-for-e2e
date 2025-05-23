import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div
          className="col col-12"
          data-testid="icon-success"
          style={{ color: "#4DE09A", fontSize: "120px" }}
        >
          <IoMdCheckmarkCircleOutline />
        </div>
        <div
          className="col col-12 mt-4"
          data-testid="text-title"
          style={{ fontSize: "50px" }}
        >
          Thank you for your order!
        </div>
        <div className="col col-12 mt-3" data-testid="text-detail">
          <div data-testid="text-detail-0">
            Your order has been dispatched, and will arrive just as fast as the
          </div>
          <div data-testid="text-detail-1">pony can get there!</div>
        </div>
        <div className="col col-12 mt-5">
          <button
            className="mt-4 p-4 btn btn-success w-300 button-style"
            data-testid="back-home-button"
            style={{ fontSize: "15px", width: "25%" }}
            onClick={handleClick}
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;

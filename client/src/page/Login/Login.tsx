import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const userList: { username: string; password: string } = {
  username: "admin",
  password: "admin",
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userList.username === username && userList.password === password) {
      navigate("/products");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "200vw" }}>
        <div
          className="container card-body"
          style={{ maxWidth: "25vw", marginTop: "80px", marginBottom: "80px" }}
        >
          <div className="col text-center align-items-center">
            <div
              className="mb-3 row"
              style={{
                minWidth: "250px",
              }}
            >
              <input
                type="text"
                className="form-control"
                style={{
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "0",
                  fontSize: "17px",
                  opacity: "0.8",
                }}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div
              className="mb-3 row"
              style={{
                minWidth: "250px",
              }}
            >
              <input
                type="password"
                className="form-control"
                style={{
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "0",
                  fontSize: "17px",
                  opacity: "0.8",
                }}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              className="row"
              style={{
                minWidth: "250px",
                marginTop: "50px",
              }}
            >
              <button
                className="mt-4 p-4 btn btn-success w-300"
                style={{
                  backgroundColor: "#3CDC91",
                  border: "none",
                  color: "black",
                  fontSize: "20px",
                }}
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="bg-dark text-white mt-4 p-4 rounded">
          <div className="row">
            <div className="col-md-6">
              <h5>Accepted usernames are:</h5>
              <ul className="list-unstyled">
                <li>standard_user</li>
                <li>locked_out_user</li>
                <li>problem_user</li>
                <li>performance_glitch_user</li>
                <li>error_user</li>
                <li>visual_user</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Password for all users:</h5>
              <ul className="list-unstyled">
                <li>secret_sauce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

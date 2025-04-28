import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import logo from "../../assets/images/ODT_Logo.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const userList: { username: string; password: string }[] = [
  {
    username: "standard_user",
    password: "secret_sauce",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateUsernameAndPassword = () => {
    const isMatch = userList.find(
      (user) => user.username === username && user.password === password
    );
    return Boolean(isMatch);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isMatch = validateUsernameAndPassword();
    if (isMatch) {
      navigate("/products");
    } else {
      alert("Login failed");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col">
          <img
            data-testid="logo"
            style={{
              maxWidth: "200px",
              height: "auto",
              padding: "20px",
              margin: "15px 0 30px 0",
            }}
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
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
              <div>
                <input
                  type="text"
                  className="form-control input-box"
                  data-testid="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div
              className="mb-3 row"
              style={{
                minWidth: "250px",
              }}
            >
              <div className="col col-12 input-group">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="form-control input-box"
                  data-testid="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  data-testid="toggle-password-button"
                  type="button"
                  onClick={togglePasswordVisibility} // Toggle visibility
                >
                  {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
            <div
              className="row"
              style={{
                minWidth: "250px",
                marginTop: "50px",
              }}
            >
              <button
                className="mt-4 p-4 btn w-300 button-style"
                data-testid="login-button"
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
                {userList.map((user, index) => (
                  <li key={user.username} data-testid={`username-${index}`}>
                    {user.username}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Password for all users:</h5>
              <ul className="list-unstyled">
                <li key="secret_sauce" data-testid="password-0">
                  secret_sauce
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

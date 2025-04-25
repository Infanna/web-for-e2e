import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "200vw" }}>
        <div
          className="container card-body"
          style={{ maxWidth: "25vw", marginTop: "80px", marginBottom: "80px" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="col text-center align-items-center">
              <div className="mb-3 row">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3 row">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="row">
                <button className="mt-4 p-4 btn btn-success w-300 ">Login</button>
              </div>
            </div>
          </form>
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

import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <div className="container" style={{ backgroundColor: "grey", paddingBottom: "150px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",borderColor:"darkgrey" }}>
            <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "#3498db", color: "white" }}>Login</h2>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    style={{borderColor:"#e74c3c"}}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    style={{borderColor:"#e74c3c"}}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#27ae60", color: "white" }}
                  onClick={handleLogin}
                >
                <i className="fa fa-sign-in me-2"></i>
                  Login
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

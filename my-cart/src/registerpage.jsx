import { useState } from "react";
import { message } from 'antd';

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
        let obj = {
            name: name,
            username: username,
            password: password
        }
        console.log(obj)

        message.success("Registered Succesfully")
  };

  return (
    <div className="container" style={{ backgroundColor: "grey", paddingBottom: "130px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5" style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
            <h2 className="card-header d-flex justify-content-center fw-bold" style={{ backgroundColor: "#3498db", color: "white" }}>Register</h2>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    style={{borderColor:"#e74c3c"}}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter a username"
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
                    placeholder="Enter a password"
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
                  onClick={()=>{handleRegister()}}
                >
                <i className="fa fa-user-plus me-1"></i>
                  Register
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

export default Register;

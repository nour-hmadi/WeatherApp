import React from "react";
import "./Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [zih, setZih] = useState(false);

  function activateZih() {
    setZih(true);
  }

  function deactivateZih() {
    setZih(false);
  }
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstname, lastname }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const data = await response.json();
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("Id", data.user);
      if (data.role === "User") {
        navigate("/");
      }
      console.log("Registration successful");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  //   login
  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message);
      }
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("Id", data.user);
      console.log(data);
      // if (data.role === "User") {
      window.location.href = "/home";
      // }
      console.log("Login successful");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <>
      <div className="J-popup-wrapper">
        <div className="svg-head">
          <div
            className={zih ? "svg-wrapper-1 svg-wrapper-12" : "svg-wrapper-1"}
          >
            <svg height="250" width="400">
              <polygon
                points="160,10 360,120 160,220"
                stroke="#0b496aa3"
                fill="#0b496aa3"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div
            className={zih ? "svg-wrapper-1 svg-wrapper-12" : "svg-wrapper-1"}
          >
            <svg height="300" width="400">
              <polygon
                points="160,10 360,120 160,220"
                stroke="#0b496aa3"
                fill="#0b496aa3"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <div className="all-wrapper">
          <div className="all-wrapper-child">
            <div className="ask-login jiji">
              <h1>Already have an account?</h1>
              <button className="login-button" onClick={deactivateZih}>
                LOGIN
              </button>
            </div>
            <div className="ask-signup jiji">
              <h1>Don't have an account?</h1>
              <button onClick={activateZih}>REGISTER</button>
            </div>
          </div>
          <div className="main-f-wrapper">
            <div className={zih ? "J-forms-wrapper-zih" : "J-forms-wrapper"}>
              <div
                className={
                  zih
                    ? "left-right-wrapper-zih left-right-wrapper"
                    : "left-right-wrapper"
                }
              >
                <form onSubmit={handleLogin}>
                  <div className="login-label">
                    <label className="label-login">
                      Email:
                      <br />
                      <input
                        className="login-form-input"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </label>
                  </div>
                  <div className="login-label">
                    <label className="label-login">
                      Password:
                      <br />
                      <input
                        className="login-form-input"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </label>
                  </div>
                  <div className="login-button">
                    {error && (
                      <p className="error-message">
                        {" "}
                        Email or Password entered incorrectly
                      </p>
                    )}
                    <button type="submit">LOGIN</button>
                  </div>
                </form>

                <form onSubmit={handleSubmit} className="register-container">
                  <div className="username">
                    <label className="label-auth">Email Address:</label> <br />
                    <input
                      autoComplete="off"
                      className="register-input"
                      type="text"
                      id="username"
                      placeholder="John Doe"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="password">
                    <label className="label-auth">Password:</label>
                    <br />
                    <input
                      autoComplete="off"
                      className="register-input"
                      type="password"
                      id="password"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="password">
                    <label className="label-auth">Confirm Password:</label>
                    <br />
                    <input
                      autoComplete="off"
                      className="register-input"
                      type="confirm-password"
                      id="confirm-password"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="address">
                    <label className="label-auth">First Name:</label>
                    <br />
                    <input
                      autoComplete="off"
                      className="register-input"
                      type="text"
                      id="address"
                      value={firstname}
                      placeholder="beirut dt aazariye block 3"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="phone-number">
                    <label className="label-auth">Last Name:</label>
                    <br />
                    <input
                      autoComplete="off"
                      className="register-input"
                      type="text"
                      id="last-name"
                      placeholder="last name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  {error && <p className="error-message"> {error}</p>}
                  <button className="submit-button" type="submit">
                    REGISTER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;

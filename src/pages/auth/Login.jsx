import { useState } from "react";
import Logo from "../../components/Logo";

function Login({ onLogin, onRegister }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    onLogin();
  };

  return (
    <div className="mobile-container">
      <div className="auth-page">

        <div className="logo-center">
          <Logo size={90} />
        </div>

        <h1 className="brand-title">
          Sannidhi
        </h1>

        <p className="brand-subtitle">
          Public Healthcare Access & Continuity
        </p>

        <form onSubmit={submit}>

          <div className="input-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="primary-button">
            Login
          </button>

        </form>

        <button
          className="secondary-button"
          onClick={onRegister}
        >
          Create New Account
        </button>

      </div>
    </div>
  );
}

export default Login;
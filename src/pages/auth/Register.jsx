import { useState } from "react";
import Logo from "../../components/Logo";

function Register({ onRegister, onLogin }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e) => {
    e.preventDefault();

    onRegister(name, phone);
  };

  return (
    <div className="mobile-container">
      <div className="auth-page">

        <div className="logo-center">
          <Logo size={75} />
        </div>

        <h1 className="brand-title">
          Create Account
        </h1>

        <p className="brand-subtitle">
          Join Sannidhi healthcare services
        </p>

        <form onSubmit={submit}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <button className="primary-button">
            Continue
          </button>

        </form>

        <button
          className="secondary-button"
          onClick={onLogin}
        >
          Already have an account?
        </button>

      </div>
    </div>
  );
}

export default Register;
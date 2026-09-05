import logo from "../assets/Logo.png";

function Logo({ size = 55 }) {
  return (
    <img
      src={logo}
      alt="Sannidhi"
      className="sannidhi-logo"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}

export default Logo;
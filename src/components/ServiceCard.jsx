function ServiceCard({ icon, title, description, onClick }) {
  return (
    <button
      className="service-card"
      onClick={onClick}
    >
      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </button>
  );
}

export default ServiceCard;
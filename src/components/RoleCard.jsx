function RoleCard({ icon, title, description, onClick }) {
  return (
    <button className="role-card" onClick={onClick}>
      <div className="role-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </button>
  );
}

export default RoleCard;
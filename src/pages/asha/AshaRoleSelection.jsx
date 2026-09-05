import Logo from "../../components/Logo";
import RoleCard from "../../components/RoleCard";

function AshaRoleSelection({ onSelectRole, navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <button
          className="back-button"
          onClick={() => navigate("role")}
        >
          ←
        </button>

        <div className="logo-center">
          <Logo size={65} />
        </div>

        <h1 className="brand-title">
          ASHA Role
        </h1>

        <p className="brand-subtitle">
          Select your responsibility
        </p>

        <div className="role-grid">

          <RoleCard
            icon="👩‍💼"
            title="ASHA Supervisor"
            description="Manage workers & reports"
            onClick={() => onSelectRole("supervisor")}
          />

          <RoleCard
            icon="👩‍⚕️"
            title="ASHA Worker"
            description="Community field work"
            onClick={() => onSelectRole("worker")}
          />

        </div>

      </div>

    </div>
  );
}

export default AshaRoleSelection;
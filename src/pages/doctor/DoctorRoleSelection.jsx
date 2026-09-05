import Logo from "../../components/Logo";
import RoleCard from "../../components/RoleCard";

function DoctorRoleSelection({ onSelectRole, navigate }) {
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
          Doctor Type
        </h1>

        <p className="brand-subtitle">
          Select your healthcare level
        </p>

        <div className="role-grid">

          <RoleCard
            icon="🩺"
            title="CHO"
            description="Community Health Officer"
            onClick={() => onSelectRole("cho")}
          />

          <RoleCard
            icon="🏥"
            title="PHC"
            description="Primary Health Centre"
            onClick={() => onSelectRole("phc")}
          />

          <RoleCard
            icon="👨‍⚕️"
            title="Specialist"
            description="Specialist Doctor"
            onClick={() => onSelectRole("specialist")}
          />

        </div>

      </div>

    </div>
  );
}

export default DoctorRoleSelection;
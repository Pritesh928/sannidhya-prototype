import Logo from "../../components/Logo";
import RoleCard from "../../components/RoleCard";

function RoleSelection({ onSelectRole }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <div className="logo-center">
          <Logo size={70} />
        </div>

        <h1 className="brand-title">
          Who are you?
        </h1>

        <p className="brand-subtitle">
          Select your role to continue
        </p>

        <div className="role-grid">

          <RoleCard
            icon="🧑"
            title="Patient"
            description="Access healthcare"
            onClick={() => onSelectRole("patient")}
          />

          <RoleCard
            icon="👩‍⚕️"
            title="ASHA"
            description="Community health"
            onClick={() => onSelectRole("asha")}
          />

          <RoleCard
            icon="🩺"
            title="Doctor"
            description="Clinical care"
            onClick={() => onSelectRole("doctor")}
          />

          <RoleCard
            icon="💊"
            title="Pharmacy"
            description="Medicines & stock"
            onClick={() => onSelectRole("pharmacy")}
          />

          <RoleCard
            icon="🧪"
            title="Lab"
            description="Diagnostics"
            onClick={() => onSelectRole("lab")}
          />

        </div>

      </div>

    </div>
  );
}

export default RoleSelection;
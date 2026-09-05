import TopBar from "../../../components/TopBar";
import StatCard from "../../../components/StatCard";
import ServiceCard from "../../../components/ServiceCard";

function AshaSupervisorDashboard({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <TopBar name="Asha Supervisor" />

        <div className="hero-card">
          <h2>Community Health Overview</h2>
          <p>
            Monitor ASHA workers, assigned areas and
            collected health information.
          </p>
        </div>

        <div className="stats-grid">
          <StatCard value="24" label="ASHA Workers" />
          <StatCard value="18" label="Reports Pending" />
          <StatCard value="436" label="Households" />
          <StatCard value="31" label="Follow-ups" />
        </div>

        <h3 className="section-title">
          Supervisor Tools
        </h3>

        <div className="service-grid">

          <ServiceCard
            icon="👥"
            title="Workers"
            description="Manage ASHA workers"
            onClick={() => navigate("asha-workers")}
          />

          <ServiceCard
            icon="📍"
            title="Assign Area"
            description="Assign areas"
            onClick={() => navigate("asha-assign-area")}
          />

          <ServiceCard
            icon="📊"
            title="Worker Data"
            description="Collected information"
            onClick={() => navigate("asha-worker-data")}
          />

          <ServiceCard
            icon="📄"
            title="Reports"
            description="Generate reports"
            onClick={() => navigate("asha-supervisor-reports")}
          />

        </div>

      </div>

    </div>
  );
}

export default AshaSupervisorDashboard;
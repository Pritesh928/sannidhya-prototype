import TopBar from "../../components/TopBar";
import StatCard from "../../components/StatCard";
import ServiceCard from "../../components/ServiceCard";

function LabDashboard({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <TopBar name="Lab Centre" />

        <div className="hero-card">
          <h2>Lab & Diagnostics</h2>

          <p>
            Manage test requests, equipment availability
            and patient reports.
          </p>
        </div>

        <div className="stats-grid">

          <StatCard value="16" label="Test Requests" />
          <StatCard value="09" label="Completed" />
          <StatCard value="04" label="Pending" />
          <StatCard value="12" label="Equipment" />

        </div>

        <h3 className="section-title">
          Laboratory Tools
        </h3>

        <div className="service-grid">

          <ServiceCard
            icon="🧪"
            title="Test Requests"
            description="Patient tests"
            onClick={() => navigate("lab-requests")}
          />

          <ServiceCard
            icon="⚙️"
            title="Equipment"
            description="Check availability"
            onClick={() => navigate("lab-equipment")}
          />

          <ServiceCard
            icon="📊"
            title="Reports"
            description="Lab reports"
            onClick={() => navigate("lab-reports")}
          />

          <ServiceCard
            icon="📤"
            title="Send Report"
            description="Send to doctor"
            onClick={() => navigate("lab-send-report")}
          />

        </div>

      </div>

    </div>
  );
}

export default LabDashboard;
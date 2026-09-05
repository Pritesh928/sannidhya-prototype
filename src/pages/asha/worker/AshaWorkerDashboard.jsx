import TopBar from "../../../components/TopBar";
import StatCard from "../../../components/StatCard";
import ServiceCard from "../../../components/ServiceCard";

function AshaWorkerDashboard({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <TopBar name="Sunita" />

        <div className="hero-card">
          <h2>Today's Field Work</h2>
          <p>
            Continue household visits and community
            healthcare activities.
          </p>
        </div>

        <div className="stats-grid">

          <StatCard
            value="12"
            label="Houses Visited"
          />

          <StatCard
            value="04"
            label="Follow-ups"
          />

        </div>

        <h3 className="section-title">
          Field Activities
        </h3>

        <div className="service-grid">

          <ServiceCard
            icon="🏠"
            title="Houses Visited"
            description="Today's visits"
            onClick={() => navigate("asha-houses")}
          />

          <ServiceCard
            icon="👨‍👩‍👧"
            title="Users"
            description="People under care"
            onClick={() => navigate("asha-users")}
          />

          <ServiceCard
            icon="🔄"
            title="Follow-ups"
            description="Pending cases"
            onClick={() => navigate("asha-followups")}
          />

          <ServiceCard
            icon="📹"
            title="Teleconsultation"
            description="Connect patient"
            onClick={() => navigate("asha-teleconsultation")}
          />

        </div>

      </div>

    </div>
  );
}

export default AshaWorkerDashboard;
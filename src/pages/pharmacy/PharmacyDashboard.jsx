import TopBar from "../../components/TopBar";
import StatCard from "../../components/StatCard";
import ServiceCard from "../../components/ServiceCard";

function PharmacyDashboard({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <TopBar name="Pharmacy" />

        <div className="hero-card">
          <h2>Pharmacy Management</h2>

          <p>
            Manage medicine requests, inventory and
            availability across healthcare facilities.
          </p>
        </div>

        <div className="stats-grid">

          <StatCard value="124" label="Medicines" />
          <StatCard value="08" label="Requests" />
          <StatCard value="12" label="Low Stock" />
          <StatCard value="03" label="Unavailable" />

        </div>

        <h3 className="section-title">
          Pharmacy Tools
        </h3>

        <div className="service-grid">

          <ServiceCard
            icon="📩"
            title="Medicine Requests"
            description="Pending requests"
            onClick={() => navigate("pharmacy-requests")}
          />

          <ServiceCard
            icon="📦"
            title="Inventory"
            description="Manage stock"
            onClick={() => navigate("pharmacy-inventory")}
          />

          <ServiceCard
            icon="🔎"
            title="Availability"
            description="Check medicines"
            onClick={() => navigate("pharmacy-availability")}
          />

          <ServiceCard
            icon="📊"
            title="Reports"
            description="Inventory reports"
            onClick={() => navigate("pharmacy-reports")}
          />

        </div>

      </div>

    </div>
  );
}

export default PharmacyDashboard;
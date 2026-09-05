import TopBar from "../../components/TopBar";
import ServiceCard from "../../components/ServiceCard";
import StatCard from "../../components/StatCard";
import BottomNav from "../../components/BottomNav";

function PatientDashboard({ user, navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <TopBar name={user.name} />

        <div className="hero-card">
          <h2>Your health, connected.</h2>

          <p>
            Access doctors, medicines, diagnostics and
            follow-up care from one place.
          </p>
        </div>

        <div className="stats-grid">

          <StatCard
            value="02"
            label="Upcoming Visits"
          />

          <StatCard
            value="04"
            label="Medical Records"
          />

        </div>

        <h3 className="section-title">
          Healthcare Services
        </h3>

        <div className="service-grid">

          <ServiceCard
            icon="🤖"
            title="Medical Assistance"
            description="Get health guidance"
            onClick={() => navigate("patient-assistance")}
          />

          <ServiceCard
            icon="👨‍⚕️"
            title="Teleconsultation"
            description="Talk to a doctor"
            onClick={() => navigate("patient-teleconsultation")}
          />

          <ServiceCard
            icon="📅"
            title="Appointments"
            description="Manage visits"
            onClick={() => navigate("patient-appointments")}
          />

          <ServiceCard
            icon="📋"
            title="Medical Records"
            description="View your history"
            onClick={() => navigate("patient-records")}
          />

          <ServiceCard
            icon="💊"
            title="Pharmacy"
            description="Medicines"
            onClick={() => navigate("patient-pharmacy")}
          />

          <ServiceCard
            icon="🧪"
            title="Lab Tests"
            description="Tests & reports"
            onClick={() => navigate("patient-lab")}
          />

          <ServiceCard
            icon="🔄"
            title="Follow-ups"
            description="Continue your care"
            onClick={() => navigate("patient-followups")}
          />

        </div>

      </div>

      <BottomNav
        navigate={navigate}
        active="home"
      />

    </div>
  );
}

export default PatientDashboard;
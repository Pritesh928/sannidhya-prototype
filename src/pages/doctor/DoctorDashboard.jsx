import TopBar from "../../components/TopBar";
import StatCard from "../../components/StatCard";
import ServiceCard from "../../components/ServiceCard";

function DoctorDashboard({ type, navigate }) {

  const titles = {
    cho: "Community Health Officer",
    phc: "PHC Doctor",
    specialist: "Specialist Doctor",
  };

  const title = titles[type] || "Doctor";

  return (
    <div className="mobile-container">

      <div className="page">

        <TopBar name={title} />

        <div className="hero-card">
          <h2>{title}</h2>

          <p>
            Manage patients, consultations, referrals
            and follow-up care.
          </p>
        </div>

        <div className="stats-grid">

          <StatCard
            value="18"
            label="Patients Today"
          />

          <StatCard
            value="04"
            label="Referrals"
          />

          <StatCard
            value="07"
            label="Follow-ups"
          />

          <StatCard
            value="12"
            label="Reports"
          />

        </div>

        <h3 className="section-title">
          Clinical Tools
        </h3>

        <div className="service-grid">

          <ServiceCard
            icon="👥"
            title="Patients"
            description="View patient list"
            onClick={() => navigate("doctor-patients")}
          />

          <ServiceCard
            icon="📋"
            title="Patient Data"
            description="Medical information"
            onClick={() => navigate("doctor-patient-data")}
          />

          <ServiceCard
            icon="🔗"
            title="Referrals"
            description="Refer patients"
            onClick={() => navigate("doctor-referrals")}
          />

          <ServiceCard
            icon="📄"
            title="Reports"
            description="Clinical reports"
            onClick={() => navigate("doctor-reports")}
          />

          <ServiceCard
            icon="🔄"
            title="Follow-ups"
            description="Patient follow-ups"
            onClick={() => navigate("doctor-followups")}
          />

        </div>

      </div>

    </div>
  );
}

export default DoctorDashboard;
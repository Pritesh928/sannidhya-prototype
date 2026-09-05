import PageHeader from "../../components/PageHeader";

function DoctorFollowUps({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Follow-ups"
          subtitle="Patients requiring continued care"
          navigate={navigate}
        />

        <div className="list-item">
          <div className="list-main">
            <h3>Meena Jadhav</h3>
            <p>Hypertension review</p>
            <p>Tomorrow • 10:15 AM</p>
          </div>

          <span className="badge">
            Scheduled
          </span>
        </div>

      </div>

    </div>
  );
}

export default DoctorFollowUps;
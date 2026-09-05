import PageHeader from "../../../components/PageHeader";

function FollowUps({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Follow-ups"
          subtitle="Pending community cases"
          navigate={navigate}
        />

        <div className="list-item">
          <div className="list-main">
            <h3>Meena Jadhav</h3>
            <p>Hypertension</p>
            <p>Visit required today</p>
          </div>

          <span className="badge badge-warning">
            Pending
          </span>
        </div>

        <div className="list-item">
          <div className="list-main">
            <h3>Rahul Patil</h3>
            <p>Fever</p>
            <p>Doctor consultation</p>
          </div>

          <span className="badge">
            Scheduled
          </span>
        </div>

      </div>
    </div>
  );
}

export default FollowUps;
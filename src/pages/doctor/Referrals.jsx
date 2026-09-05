import PageHeader from "../../components/PageHeader";

function Referrals({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Referrals"
          subtitle="Patient referral tracking"
          navigate={navigate}
        />

        <div className="list-item">
          <div className="list-main">
            <h3>Meena Jadhav</h3>
            <p>Referred to District Hospital</p>
          </div>

          <span className="badge">
            Scheduled
          </span>
        </div>

        <div className="list-item">
          <div className="list-main">
            <h3>Suresh More</h3>
            <p>Specialist consultation required</p>
          </div>

          <span className="badge badge-warning">
            Pending
          </span>
        </div>

        <button
          className="primary-button"
          onClick={() => alert("Demo referral created")}
        >
          + Create Referral
        </button>

      </div>

    </div>
  );
}

export default Referrals;
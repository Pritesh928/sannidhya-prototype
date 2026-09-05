import PageHeader from "../../components/PageHeader";

function FollowUps({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Follow-ups"
          subtitle="Continue your care journey"
          navigate={navigate}
        />

        <div className="list-item">
          <div className="list-main">
            <h3>Hypertension Review</h3>
            <p>Dr. Priya Joshi</p>
            <p>08 Sep • 11:00 AM</p>
          </div>

          <span className="badge">
            Upcoming
          </span>
        </div>

        <div className="list-item">
          <div className="list-main">
            <h3>Blood Test Review</h3>
            <p>Dr. Amit Sharma</p>
            <p>10 Sep • 03:00 PM</p>
          </div>

          <span className="badge">
            Upcoming
          </span>
        </div>

      </div>

    </div>
  );
}

export default FollowUps;
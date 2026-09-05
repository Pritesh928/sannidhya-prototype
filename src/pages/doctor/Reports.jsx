import PageHeader from "../../components/PageHeader";

function Reports({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Reports"
          subtitle="Clinical reports"
          navigate={navigate}
        />

        <div className="list-item">
          <div className="list-main">
            <h3>Patient Visit Report</h3>
            <p>05 September 2026</p>
          </div>

          <span className="badge">
            View
          </span>
        </div>

        <div className="list-item">
          <div className="list-main">
            <h3>Referral Summary</h3>
            <p>September 2026</p>
          </div>

          <span className="badge">
            View
          </span>
        </div>

      </div>

    </div>
  );
}

export default Reports;
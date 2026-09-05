import PageHeader from "../../../components/PageHeader";

function SupervisorReports({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Reports"
          subtitle="Community health reports"
          navigate={navigate}
        />

        <div className="card">
          <h3>Monthly Field Report</h3>
          <p>Households visited: 436</p>
          <p>Health screenings: 291</p>
          <p>Follow-ups required: 31</p>

          <button
            className="primary-button"
            onClick={() => alert("Demo report generated")}
          >
            Generate Report
          </button>
        </div>

      </div>
    </div>
  );
}

export default SupervisorReports;
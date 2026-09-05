import PageHeader from "../../components/PageHeader";

function PharmacyReports({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Pharmacy Reports"
          subtitle="Inventory overview"
          navigate={navigate}
        />

        <div className="card">

          <h3>September Inventory</h3>

          <p>Total medicines: 124</p>
          <p>Low stock: 12</p>
          <p>Unavailable: 3</p>
          <p>Requests received: 28</p>

          <button
            className="primary-button"
            onClick={() => alert("Demo pharmacy report generated")}
          >
            Generate Report
          </button>

        </div>

      </div>
    </div>
  );
}

export default PharmacyReports;
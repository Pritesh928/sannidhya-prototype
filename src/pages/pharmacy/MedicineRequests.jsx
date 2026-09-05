import PageHeader from "../../components/PageHeader";

function MedicineRequests({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Medicine Requests"
          subtitle="Pending requests"
          navigate={navigate}
        />

        <div className="list-item">
          <div className="list-main">
            <h3>PHC Nandgaon</h3>
            <p>Paracetamol 500mg × 50</p>
          </div>

          <span className="badge badge-warning">
            Pending
          </span>
        </div>

        <div className="list-item">
          <div className="list-main">
            <h3>Sub Centre Ward 03</h3>
            <p>Metformin 500mg × 30</p>
          </div>

          <span className="badge">
            Approved
          </span>
        </div>

      </div>
    </div>
  );
}

export default MedicineRequests;
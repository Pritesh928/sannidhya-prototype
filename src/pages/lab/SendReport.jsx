import PageHeader from "../../components/PageHeader";

function SendReport({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Send Report"
          subtitle="Share report with doctor"
          navigate={navigate}
        />

        <div className="card">

          <div className="input-group">
            <label>Patient</label>

            <select>
              <option>Rahul Patil</option>
              <option>Meena Jadhav</option>
              <option>Suresh More</option>
            </select>
          </div>

          <div className="input-group">
            <label>Doctor</label>

            <select>
              <option>Dr. Amit Sharma</option>
              <option>Dr. Priya Joshi</option>
            </select>
          </div>

          <div className="input-group">
            <label>Report</label>

            <select>
              <option>CBC Report</option>
              <option>Blood Sugar Report</option>
              <option>Lipid Profile</option>
            </select>
          </div>

          <button
            className="primary-button"
            onClick={() => alert("Report sent successfully")}
          >
            Send Report
          </button>

        </div>

      </div>

    </div>
  );
}

export default SendReport;
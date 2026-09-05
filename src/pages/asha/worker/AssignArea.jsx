import PageHeader from "../../../components/PageHeader";

function AssignArea({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Assign Area"
          subtitle="Assign community areas"
          navigate={navigate}
        />

        <div className="card">

          <div className="input-group">
            <label>Select Worker</label>

            <select>
              <option>Sunita Pawar</option>
              <option>Kavita Shinde</option>
              <option>Mangal More</option>
            </select>
          </div>

          <div className="input-group">
            <label>Select Area</label>

            <select>
              <option>Nandgaon East</option>
              <option>Nandgaon West</option>
              <option>Ward 03</option>
            </select>
          </div>

          <button
            className="primary-button"
            onClick={() => alert("Area assigned successfully")}
          >
            Assign Area
          </button>

        </div>

      </div>
    </div>
  );
}

export default AssignArea;
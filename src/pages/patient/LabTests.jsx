import PageHeader from "../../components/PageHeader";
import { labTests } from "../../data/lab";

function LabTests({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Lab Tests"
          subtitle="Diagnostics & reports"
          navigate={navigate}
        />

        {labTests.map((test) => (
          <div className="list-item" key={test.id}>

            <div className="list-main">
              <h3>{test.test}</h3>
              <p>{test.patient}</p>
              <p>{test.date}</p>
            </div>

            <span className="badge">
              {test.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default LabTests;
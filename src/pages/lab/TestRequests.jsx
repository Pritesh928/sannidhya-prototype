import PageHeader from "../../components/PageHeader";
import { labTests } from "../../data/lab";

function TestRequests({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Test Requests"
          subtitle="Incoming diagnostic requests"
          navigate={navigate}
        />

        {labTests.map((test) => (
          <div className="list-item" key={test.id}>

            <div className="list-main">
              <h3>{test.patient}</h3>
              <p>{test.test}</p>
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

export default TestRequests;
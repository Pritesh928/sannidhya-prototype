import PageHeader from "../../components/PageHeader";
import { labTests } from "../../data/lab";

function LabReports({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Lab Reports"
          subtitle="Completed diagnostic reports"
          navigate={navigate}
        />

        {labTests
          .filter((test) => test.status === "Completed")
          .map((test) => (
            <div className="list-item" key={test.id}>

              <div className="list-main">
                <h3>{test.patient}</h3>
                <p>{test.test}</p>
                <p>{test.date}</p>
              </div>

              <span className="badge">
                View
              </span>

            </div>
          ))}

      </div>
    </div>
  );
}

export default LabReports;
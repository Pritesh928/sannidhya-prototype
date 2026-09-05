import PageHeader from "../../components/PageHeader";
import { patients } from "../../data/patients";

function PatientList({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Patients"
          subtitle="Today's patient list"
          navigate={navigate}
        />

        {patients.map((patient) => (
          <div
            className="list-item"
            key={patient.id}
            onClick={() => navigate("doctor-patient-data")}
          >
            <div className="list-main">
              <h3>{patient.name}</h3>
              <p>
                {patient.age} years • {patient.gender}
              </p>
              <p>{patient.condition}</p>
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

export default PatientList;